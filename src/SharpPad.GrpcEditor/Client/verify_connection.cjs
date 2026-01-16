const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, '../Protos/editor.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const editor_proto = grpc.loadPackageDefinition(packageDefinition).editor;

const client = new editor_proto.EditorService('localhost:5256', grpc.credentials.createInsecure());

const connection = {
    name: "TestConnection",
    provider: "SqlServer",
    connectionString: "Server=(localdb)\\mssqllocaldb;Database=Master;Trusted_Connection=True;"
};

// 1. Save Connection
console.log("Saving connection...");
client.SaveConnection({ connection: connection }, (err, response) => {
    if (err) {
        console.error("SaveConnection Error:", err);
        return;
    }
    console.log("SaveConnection Response:", response);
    
    if (response.success && response.id) {
        const connectionId = response.id;
        console.log("Connection ID:", connectionId);

        // 2. Execute Code
        const code = `
            DB.Instance?.ContextID.Dump("ContextID");
        `;
        
        const request = {
            code: code,
            typeName: "",
            methodName: "",
            extraFiles: [],
            connectionId: connectionId
        };

        console.log("Executing code with connection...");
        client.ExecuteCode(request, (err, response) => {
            if (err) {
                console.error("ExecuteCode Error:", err);
                return;
            }
            console.log("ExecuteCode Response:", response);
            console.log("Console Output:", response.consoleOutput);
            console.log("Return Output:", response.output);
        });
    }
});
