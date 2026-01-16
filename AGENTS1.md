# SharpPad 项目总览

SharpPad 是一个面向 C# 开发者的代码实验与 AI 辅助平台，结合 Monaco 编辑器、Roslyn 编译服务与多实例管理，在浏览器或桌面端提供即时运行、补全与聊天体验。

## 解决方案结构
- `SharpPad.GrpcEditor/`：**核心服务**。基于 ASP.NET Core gRPC 的后端服务，负责承载编辑器逻辑与语言服务。
    - `Client/`：基于 React + Vite + Monaco Editor 的现代化前端。
    - `Services/`：包含 `EditorService`，通过 gRPC 暴露语言功能。
    - `Protos/`：定义前后端通信契约。
- `SharpPad.SqlCore/`：**核心逻辑库**。封装了 Roslyn 分析、编译、执行与动态加载的核心实现。
    - `Implementations/ProjectAnalysisSession.cs`：管理项目分析会话。
    - `Implementations/DynamicCodeExecutor.cs`：负责动态加载程序集并执行代码。
- `SharpPad/` & `SharpPad.Desktop/`：*（旧版/遗留）* 原有的 REST API 实现与 Avalonia 桌面壳层，现逐步迁移至 gRPC 架构。
- `KingOfTool/`：示例脚本与配置集合。

## 核心组件 (SharpPad.GrpcEditor)

### 后端架构
- **EditorService**：gRPC 服务入口，处理前端的所有编辑器请求（补全、高亮、执行等）。
- **ProjectAnalysisSession**：有状态的会话管理器，维护 Roslyn Workspace 与 Project 状态，提供增量编译与分析。
- **DynamicCodeExecutor**：使用 `AssemblyLoadContext` 实现代码的隔离执行与卸载，并支持 **控制台输出捕获**。

### 前端架构 (Client)
- **Monaco Editor**：核心编辑器，配置了 C# 语言特性。
- **gRPC Client**：使用 `grpc-web` 或 `protobufjs` 与后端通信。
- **功能特性**：
    - **智能感知**：代码补全、悬停提示、签名帮助。
    - **语义高亮**：基于 Roslyn 语义分析的精准着色。
    - **即时运行**：一键编译运行，并在 UI 上查看结果。

## 开发指南

## 要求
每次更改之后必须经过验证，包括但不限于dotnet build
npm build dev
调用chrome devtool mcp等等

### 环境要求
- .NET 10.0 SDK
- Node.js 18+ (用于构建前端)

### 构建与运行
1.  **启动后端**：
    ```bash
    cd src/SharpPad.GrpcEditor
    dotnet run
    ```
2.  **启动前端**：
    ```bash
    cd src/SharpPad.GrpcEditor/Client
    npm install
    npm run dev
    ```

### 关键特性实现
- **输出重定向**：后端 `DynamicCodeExecutor` 捕获 `Console.Out`，通过 `ExecuteCodeReply` 返回给前端显示。
- **语义着色**：后端 `SemanticTokensBuilder` 生成语义 Token，前端通过 Monaco Theme 进行自定义渲染。

## 维护记录
- **2026-01-15**：迁移至 gRPC 架构，增强输出捕获能力，优化编辑器体验。
