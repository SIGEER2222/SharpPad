using System.Collections.Generic;

namespace SharpPad.SqlCore.Examples
{
    public class ExampleItem
    {
        public string Title { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
    }

    public static class SqlSugarExamples
    {
        public static List<ExampleItem> All { get; } = new List<ExampleItem>
        {
            // --- 数据查询 ---
            new ExampleItem { Category = "数据查询", Title = "查询目录", Code = "var tables = db.DbMaintenance.GetTableInfoList();" },
            new ExampleItem { Category = "数据查询", Title = "基础查询", Code = "var list = db.Queryable<Student>().ToList();" },
            new ExampleItem { Category = "数据查询", Title = "分页查询", Code = "int total = 0;\nvar list = db.Queryable<Student>().ToPageList(1, 10, ref total);" },
            new ExampleItem { Category = "数据查询", Title = "分组去重", Code = "var list = db.Queryable<Student>().GroupBy(it => it.Name).Select(it => it.Name).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "排序用法", Code = "var list = db.Queryable<Student>().OrderBy(it => it.Id, OrderByType.Desc).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "联表查询", Code = "var list = db.Queryable<Student>()\n    .LeftJoin<School>((st, sc) => st.SchoolId == sc.Id)\n    .Select((st, sc) => new { st.Name, SchoolName = sc.Name })\n    .ToList();" },
            new ExampleItem { Category = "数据查询", Title = "导航查询", Code = "var list = db.Queryable<Student>().Includes(x => x.School).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "子查询", Code = "var list = db.Queryable<Student>().Where(it => SqlFunc.Subqueryable<School>().Where(s => s.Id == it.SchoolId).Any()).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "嵌套查询", Code = "var list = db.Queryable<Student>().Where(it => SqlFunc.Subqueryable<School>().Where(s => s.Id == it.SchoolId).Any()).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "配置查询", Code = "var list = db.Queryable<Student>().Select(it => new { it.Id, it.Name }).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "并集查询", Code = "var q1 = db.Queryable<Student>().Where(it => it.Id == 1);\nvar q2 = db.Queryable<Student>().Where(it => it.Id == 2);\nvar list = db.Union(q1, q2).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "树型查询", Code = "var list = db.Queryable<TreeItem>().ToTree(it => it.Children, it => it.ParentId, 0);" },
            new ExampleItem { Category = "数据查询", Title = "动态表达式", Code = "var exp = Expressionable.Create<Student>();\nexp.And(it => it.Id > 1);\nvar list = db.Queryable<Student>().Where(exp.ToExpression()).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "表格查询", Code = "var list = db.Queryable<Student>().ToDataTable();" },
            new ExampleItem { Category = "数据查询", Title = "异步查询", Code = "var list = await db.Queryable<Student>().ToListAsync();" },
            new ExampleItem { Category = "数据查询", Title = "查询函数", Code = "var list = db.Queryable<Student>().Where(it => SqlFunc.HasValue(it.Name)).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "过滤器", Code = "db.QueryFilter.Add(new TableFilterItem<Student>(it => it.Id > 0));\nvar list = db.Queryable<Student>().ToList();" },
            new ExampleItem { Category = "数据查询", Title = "扩展函数", Code = "var list = db.Queryable<Student>().Where(it => it.Id.ToString() == \"1\").ToList();" },
            new ExampleItem { Category = "数据查询", Title = "跨库查询", Code = "var list = db.Queryable<Student>().AS(\"Student\").ToList(); // Real usage: AS(\"db2.dbo.Student\")" },
            new ExampleItem { Category = "数据查询", Title = "无实体查询", Code = "var list = db.Queryable<dynamic>().AS(\"Student\").ToList();" },
            new ExampleItem { Category = "数据查询", Title = "报表查询", Code = "var list = db.Queryable<Order>().Select(it => new { Year = it.CreateTime.Year, Count = SqlFunc.AggregateCount(it.Id) }).GroupBy(it => it.Year).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "生命周期", Code = "// 需要在AOP中配置\nvar list = db.Queryable<Student>().ToList();" },
            new ExampleItem { Category = "数据查询", Title = "Where", Code = "var list = db.Queryable<Student>().Where(it => it.Id == 1).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "Select", Code = "var list = db.Queryable<Student>().Select(it => it.Name).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "执行查询", Code = "var list = db.Queryable<Student>().ToList();" },

            // --- 增、删、改 ---
            new ExampleItem { Category = "增、删、改", Title = "插入数据", Code = "var insertObj = new Student() { Name = \"jack\", SchoolId = 1 };\ndb.Insertable(insertObj).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "更新数据", Code = "var updateObj = new Student() { Id = 1, Name = \"jack\", SchoolId = 1 };\ndb.Updateable(updateObj).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "删除数据", Code = "db.Deleteable<Student>().Where(it => it.Id == 1).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "插入或更新", Code = "var obj = new Student() { Id = 1, Name = \"jack\" };\ndb.Saveable(obj).ExecuteReturnEntity();" },
            new ExampleItem { Category = "增、删、改", Title = "表格保存", Code = "var list = new List<Student> { new Student { Name = \"a\" } };\ndb.Saveable(list).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "导航插入", Code = "var s = new Student { Name = \"a\", School = new School { Name = \"s1\" } };\ndb.InsertNav(s).Include(it => it.School).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "导航删除", Code = "db.DeleteNav<Student>(s => s.Id == 1).Include(it => it.School).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "导航更新", Code = "var s = new Student { Id = 1, Name = \"a\", School = new School { Id = 1, Name = \"s1\" } };\ndb.UpdateNav(s).Include(it => it.School).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "导入+验证", Code = "// 需要扩展库 Support\n// db.Storageable(list).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "更新并发控制", Code = "// 需要在实体配置 Version 字段\n// db.Updateable(obj).ExecuteCommandWithOptLock();" },

            // --- 无实体&低代码 ---
            new ExampleItem { Category = "无实体&低代码", Title = "Sql分页", Code = "var list = db.SqlQueryable<dynamic>(\"select * from student\").ToPageList(1, 10);" },
            new ExampleItem { Category = "无实体&低代码", Title = "原生SQL", Code = "var dt = db.Ado.GetDataTable(\"select * from student\");" },
            new ExampleItem { Category = "无实体&低代码", Title = "Json 2 SQL", Code = "var json = db.Queryable<Student>().ToJson();" },
            new ExampleItem { Category = "无实体&低代码", Title = "无实体查询", Code = "var list = db.Queryable<dynamic>().AS(\"student\").ToList();" },
            new ExampleItem { Category = "无实体&低代码", Title = "无实体插入", Code = "var dict = new Dictionary<string, object> { { \"Name\", \"jack\" }, { \"SchoolId\", 1 } };\ndb.Insertable(dict).AS(\"Student\").ExecuteCommand();" },
            new ExampleItem { Category = "无实体&低代码", Title = "无实体更新", Code = "var dict = new Dictionary<string, object> { { \"Id\", 1 }, { \"Name\", \"jack\" } };\ndb.Updateable(dict).AS(\"Student\").WhereColumns(\"Id\").ExecuteCommand();" },
            new ExampleItem { Category = "无实体&低代码", Title = "无实体删除", Code = "db.Deleteable<dynamic>().AS(\"Student\").Where(\"Id=@id\", new { id = 1 }).ExecuteCommand();" },
            new ExampleItem { Category = "无实体&低代码", Title = "动态建类CRUD", Code = "var type = db.DynamicBuilder().CreateClass(\"NewTable\", new SugarTable());\n// db.CodeFirst.InitTables(type);" },
            new ExampleItem { Category = "无实体&低代码", Title = "字符串表达式", Code = "// ConditionalModel \n// var list = db.Queryable<Student>().Where(models).ToList();" },

            // --- 常用功能 ---
            new ExampleItem { Category = "常用功能", Title = "迁移、创建表", Code = "db.CodeFirst.InitTables(typeof(Student));" },
            new ExampleItem { Category = "常用功能", Title = "生成实体", Code = "db.DbFirst.CreateClassFile(\"c:\\\\Demo\\\\1\");" },
            new ExampleItem { Category = "常用功能", Title = "Json类型", Code = "db.CodeFirst.InitTables(typeof(Order)); // Assume Order has Json field" },
            new ExampleItem { Category = "常用功能", Title = "库表管理", Code = "var dbList = db.DbMaintenance.GetTableInfoList();" },
            new ExampleItem { Category = "常用功能", Title = "实体管理", Code = "var entityInfo = db.EntityMaintenance.GetEntityInfo<Student>();" },
            new ExampleItem { Category = "常用功能", Title = "AOP&日志", Code = "db.Aop.OnLogExecuting = (sql, pars) => { Console.WriteLine(sql); };" },
            new ExampleItem { Category = "常用功能", Title = "辅助方法", Code = "var sql = db.Queryable<Student>().ToSql();" },
            new ExampleItem { Category = "常用功能", Title = "枚举类型", Code = "var list = db.Queryable<Order>().Where(it => it.Id == (int)OrderType.Normal).ToList();" },
            new ExampleItem { Category = "常用功能", Title = "事务锁", Code = "db.Ado.BeginTran();\ntry {\n    db.Ado.CommitTran();\n} catch {\n    db.Ado.RollbackTran();\n}" },
            new ExampleItem { Category = "常用功能", Title = "自定义类型", Code = "// 配置 ConfigureExternalServices\n// db.CurrentConnectionConfig.ConfigureExternalServices = ..." },
            new ExampleItem { Category = "常用功能", Title = "打包提交", Code = "db.Ado.ExecuteCommand(\"select 1; select 2;\");" },

            // --- 设计模式 ---
            new ExampleItem { Category = "设计模式", Title = "使用仓储", Code = "var repo = new SimpleClient<Student>(db);\nvar list = repo.GetList();" },
            new ExampleItem { Category = "设计模式", Title = "IUnitOfWork", Code = "// var uow = new UnitOfWork(db);\n// uow.BeginTran();" },
            new ExampleItem { Category = "设计模式", Title = "IOC注入", Code = "// services.AddSqlSugar(config);" },
            new ExampleItem { Category = "设计模式", Title = "多租户基础", Code = "var db2 = new SqlSugarClient(new List<ConnectionConfig> { new ConnectionConfig { ConfigId = \"1\", DbType = DbType.Sqlite, ConnectionString = \"DataSource=:memory:\" } });" },
            new ExampleItem { Category = "设计模式", Title = "仓储+多租户", Code = "// var repo = new Repository<Student>(db); // context handled by IOC" },
            new ExampleItem { Category = "设计模式", Title = "单例模式", Code = "// public static SqlSugarClient Instance { get; } = ..." },
            new ExampleItem { Category = "设计模式", Title = "Sql注入", Code = "var name = \"' or 1=1 --\";\nvar list = db.Queryable<Student>().Where(it => it.Name == name).ToList();" },
            new ExampleItem { Category = "设计模式", Title = "鉴别器", Code = "// [SugarColumn(IsDiscriminator = true)]" },
            new ExampleItem { Category = "设计模式", Title = "ValueObject值对象", Code = "// [SugarColumn(IsJson = true)]" }
        };
    }
}
