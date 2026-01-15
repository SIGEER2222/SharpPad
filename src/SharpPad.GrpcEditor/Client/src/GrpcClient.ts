import { Writer, Reader } from 'protobufjs';

export class GrpcClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async call<TReq, TRes>(
        service: string,
        method: string,
        request: TReq,
        requestType: { encode: (message: TReq, writer?: Writer) => Writer },
        responseType: { decode: (reader: Reader | Uint8Array, length?: number) => TRes }
    ): Promise<TRes> {
        // Encode request
        const reqBytes = requestType.encode(request).finish();
        
        // Frame request: 1 byte flag (0) + 4 bytes length (big endian) + payload
        const frame = new Uint8Array(5 + reqBytes.length);
        frame[0] = 0; // Data
        const view = new DataView(frame.buffer);
        view.setUint32(1, reqBytes.length, false); // Big endian
        frame.set(reqBytes, 5);

        // Send
        const response = await fetch(`${this.baseUrl}/${service}/${method}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/grpc-web+proto',
                'X-Grpc-Web': '1'
            },
            body: frame
        });

        if (!response.ok) {
            throw new Error(`gRPC call failed: ${response.status} ${response.statusText}`);
        }

        const resBuffer = await response.arrayBuffer();
        const resView = new DataView(resBuffer);
        
        // Parse response frames
        let offset = 0;
        while (offset < resBuffer.byteLength) {
            const flag = resView.getUint8(offset);
            const length = resView.getUint32(offset + 1, false);
            offset += 5;

            if (flag === 0 || flag === 0x00) { // Data
                const data = new Uint8Array(resBuffer, offset, length);
                return responseType.decode(new Reader(data));
            } else if (flag === 0x80) { // Trailer
                // Trailers logic (check for grpc-status)
            }
            offset += length;
        }

        throw new Error('No data received from gRPC call');
    }
}
