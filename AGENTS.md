## 开发流程验证要求

每次更改后，必须执行以下验证步骤：

### 1. 编译验证：
- 执行 `dotnet build` 和 `npm run build dev`，确保没有错误。
- 运行基本单元测试，至少确保：
  - 界面可以打开。
  - 没有报错。

### 2. 验证步骤：
- 完成验证后，必须运行项目并确认效果。
- 若端口被占用，自动执行命令杀掉旧端口。
- 调用 Chrome DevTools (MCP) 进行验证：
  - 确保可以点击“run”。
  - 确保结果正常显示。
  - 浏览器控制台无报错。

### 3. 前端修改验证：
- 若修改了前端代码（`.ts`、`.tsx`），必须执行 `npm run build` 或 `tsc --noEmit`。
- 强制使用 `import type { ... }` 导入接口/类型，避免打包器误判。
- 不得仅凭代码阅读或后端测试来推断前端状态。

### 4. 构建验证：
- 在终端中确认输出 `Build success` 绿色字样，未出现时视为验证失败。

### 5. 单元测试：
- 所有测试加上 `Trait` 和对应的执行命令。例如：
    ```csharp
    [Fact]
    [Trait("Category", "Test")]
    // 执行命令：dotnet test --filter Category=Test
    public async Task Test()
    ```
npm run test xxx.tsx 不会自动结束，注意这点
如果每次都运行所有的测试，耗时有点久，建议只运行用到的测试文件。

### 6. 构建错误过滤：
- .NET 项目构建时，使用命令 `dotnet build xxx.csproj | Select-String "error"` 仅显示错误信息，提高效率。

### 7. 常见陷阱与最佳实践 (Lessons Learned)
- **Monaco Editor 补全逻辑**：
    - 在实现 `provideCompletionItems` 时，**必须**显式设置 `range` 属性。
    - 使用 `model.getWordUntilPosition(position)` 计算当前单词范围，确保补全项是**替换**（Replace）而不是**追加**（Append）。
    - 缺少 `range` 会导致：
        1. 补全文本重复（如 `ssource`）。
        2. 客户端过滤失效（输入 `so` 时 `source` 消失）。
- **前端集成测试**：
    - 不要只依赖后端 API 的返回结果验证。
    - 前端的数据映射逻辑（如 `mapToMonacoCompletionItem`）必须有独立的单元测试。
    - 推荐将复杂逻辑抽取为纯函数（Pure Function）放到 `utils` 目录进行测试。

