# SharpPad -> DB Query Tool 差距分析与完善路线图

本文档分析了将 SharpPad 完善为类似 LINQPad 或 SSMS 的数据库查询工具所需的关键缺失功能。

## 1. 连接管理 (Connection Management)
- **现状**：目前依赖代码中硬编码连接字符串或 `DbContext.GetClient()`。
- **缺失**：
    - **连接管理器 UI**：允许用户添加、编辑、保存数据库连接（SQL Server, PostgreSQL, MySQL, SQLite）。
    - **多环境支持**：区分开发、测试、生产环境连接。
    - **连接测试**：UI 按钮测试连接连通性。

## 2. 数据库架构浏览器 (Schema Browser)
- **现状**：无数据库元数据展示。
- **缺失**：
    - **侧边栏树视图**：展示当前连接的 数据库 -> 表 (Tables) -> 视图 (Views) -> 存储过程 (Procs)。
    - **元数据详情**：展开表查看列 (Columns)、主键、外键、索引。
    - **拖拽生成代码**：将表名拖入编辑器自动生成 `db.Queryable<TableName>()` 或 `SELECT * FROM ...` 代码。

## 3. 高级结果展示 (Data Grid Results)
- **现状**：`Dump()` 仅输出 JSON 文本或简单的表格（HTML 表格）。
- **缺失**：
    - **交互式数据网格**：支持列排序、客户端过滤、列宽调整。
    - **多结果集 (Tabs)**：支持一次执行返回多个结果集，并在底部以 Tab 形式切换展示。
    - **导出功能**：将结果导出为 CSV, Excel, JSON 文件。
    - **性能分析**：展示查询执行时间、SQL 生成预览。

## 4. SQL 生成与脚手架 (Scaffolding)
- **现状**：需手动编写 POCO 类。
- **缺失**：
    - **反向工程 UI**：右键表 -> 生成实体类 (POCO)。
    - **SQL 脚本生成**：右键表 -> 生成 CREATE / SELECT / INSERT / UPDATE 脚本。

## 5. 包管理 (NuGet UI)
- **现状**：依赖 `.csproj` 手动修改或预装依赖。
- **缺失**：
    - **NuGet 搜索与安装 UI**：允许用户搜索并安装数据库驱动 (如 `Npgsql`, `Microsoft.Data.SqlClient`)。
    - **自动引用**：安装后自动添加到脚本引用路径。

## 6. 查询历史与收藏
- **现状**：依赖文件系统保存脚本。
- **缺失**：
    - **执行历史记录**：自动保存最近执行的 100 条查询，防止代码丢失。
    - **收藏夹**：快速访问常用查询片段。

## 7. SQL 智能提示 (SQL Intellisense)
- **现状**：C# 补全良好，但字符串内的 SQL 无补全。
- **缺失**：
    - **SQL 语言注入**：在 `db.ExecuteCommand("SELECT ...")` 字符串中提供 SQL 语法高亮与补全。
    - **表名/列名补全**：基于当前连接的 Schema 提供智能提示。
