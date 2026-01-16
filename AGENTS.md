## 要求
每次更改之后必须经过验证，包括但不限于dotnet build
npm build dev
运行基本的单元测试，要求至少不能打不开界面或者打开界面报错
每次验证完毕之后运行项目，让我能直接看到效果，如果端口被占用，执行命令杀掉旧端口
调用chrome devtool mcp等等
    - 只要修改了前端代码（ .ts , .tsx ）， 必须 运行 npm run build 或 tsc --noEmit 。
    - 严禁仅凭“代码阅读”或“后端测试通过”来推断前端状态。
    - 在 TypeScript 中导入 Interface/Type 时， 强制 使用 import type { ... } 语法，从代码层面消除歧义，避免打包器误判。
    - 在回复“验证完毕”之前，必须看到终端中 Build success 的绿色字样，否则视为验证失败。

    - 别忘记调用 chrome devtool mcp去验证
        1. 可以点击“run” 
        2. 可以出现正常的运行结果
        3. 浏览器控制台没有报错

**构建验证：**
- .NET 项目使用：`dotnet build xxx.csproj | Select-String "error"`  只显示错误信息，提高效率



