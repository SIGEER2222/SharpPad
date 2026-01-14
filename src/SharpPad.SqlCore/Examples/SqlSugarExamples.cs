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
            // 数据查询
            new ExampleItem { Category = "数据查询", Title = "查询目录", Code = "// 查询所有表\nvar tables = db.DbMaintenance.GetTableInfoList();" },
            new ExampleItem { Category = "数据查询", Title = "基础查询", Code = "var list = db.Queryable<Student>().ToList();" },
            new ExampleItem { Category = "数据查询", Title = "分页查询", Code = "var list = db.Queryable<Student>().ToPageList(1, 10);" },
            new ExampleItem { Category = "数据查询", Title = "分组去重", Code = "var list = db.Queryable<Student>().GroupBy(it => it.Name).Select(it => it.Name).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "排序用法", Code = "var list = db.Queryable<Student>().OrderBy(it => it.Id, OrderByType.Desc).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "联表查询", Code = "var list = db.Queryable<Student>()\n    .LeftJoin<School>((st, sc) => st.SchoolId == sc.Id)\n    .Select((st, sc) => new { st.Name, SchoolName = sc.Name })\n    .ToList();" },
            new ExampleItem { Category = "数据查询", Title = "导航查询", Code = "var list = db.Queryable<Student>().Includes(x => x.School).ToList();" },
            new ExampleItem { Category = "数据查询", Title = "子查询", Code = "var list = db.Queryable<Student>().Where(it => SqlFunc.Subqueryable<School>().Where(s => s.Id == it.SchoolId).Any()).ToList();" },
            
            // 增、删、改
            new ExampleItem { Category = "增、删、改", Title = "插入数据", Code = "db.Insertable(new Student() { Name = \"jack\" }).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "更新数据", Code = "db.Updateable(updateObj).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "删除数据", Code = "db.Deleteable<Student>().Where(it => it.Id == 1).ExecuteCommand();" },
            new ExampleItem { Category = "增、删、改", Title = "插入或更新", Code = "db.Saveable(insertObj).ExecuteReturnEntity();" },
            
            // 无实体&低代码
            new ExampleItem { Category = "无实体&低代码", Title = "Sql分页", Code = "var list = db.SqlQueryable<dynamic>(\"select * from student\").ToPageList(1, 10);" },
            new ExampleItem { Category = "无实体&低代码", Title = "原生SQL", Code = "var dt = db.Ado.GetDataTable(\"select * from student\");" },
            new ExampleItem { Category = "无实体&低代码", Title = "无实体查询", Code = "var list = db.Queryable<dynamic>().AS(\"student\").ToList();" },
            
            // 常用功能
            new ExampleItem { Category = "常用功能", Title = "迁移、创建表", Code = "db.CodeFirst.InitTables(typeof(Student));" },
            new ExampleItem { Category = "常用功能", Title = "生成实体", Code = "db.DbFirst.CreateClassFile(\"c:\\\\Demo\\\\1\");" },
            new ExampleItem { Category = "常用功能", Title = "事务锁", Code = "db.Ado.BeginTran();\ntry {\n    // operations\n    db.Ado.CommitTran();\n} catch {\n    db.Ado.RollbackTran();\n}" },
            
            // 设计模式
            new ExampleItem { Category = "设计模式", Title = "使用仓储", Code = "// SimpleClient<Student> sdb = new SimpleClient<Student>(db);" },
            new ExampleItem { Category = "设计模式", Title = "Sql注入", Code = "// SqlSugar 自动参数化防止注入\nvar list = db.Queryable<Student>().Where(it => it.Name == name).ToList();" }
        };
    }
}
