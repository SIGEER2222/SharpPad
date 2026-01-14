using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SharpPad.SqlCore
{
    /// <summary>
    /// SqlSugar 全功能语法速查手册
    /// 涵盖: 基础查询、高级查询、增删改查、导航操作、无实体操作、架构模式等
    /// 官网: https://www.donet5.com/Home/Doc
    /// </summary>
    public class SqlSugarDemo
    {
        private const string ConnectionString = "DataSource=demo.db";

        #region 1. 初始化与配置 (Init & Config)

        /// <summary>
        /// 获取单例 SqlSugarScope (线程安全)
        /// </summary>
        public static SqlSugarScope GetInstance()
        {
            var db = new SqlSugarScope(new ConnectionConfig()
            {
                ConnectionString = ConnectionString,
                DbType = DbType.Sqlite, 
                IsAutoCloseConnection = true,
                
                // 开启二级缓存
                ConfigureExternalServices = new ConfigureExternalServices()
                {
                    DataInfoCacheService = new SqlSugarCache(),
                },
                
                // 更多配置...
                MoreSettings = new ConnMoreSettings()
                {
                    IsAutoRemoveDataCache = true // 自动清理缓存
                }
            },
            db =>
            {
                // SQL 日志
                db.Aop.OnLogExecuting = (sql, pars) =>
                {
                    Console.WriteLine($"SQL: {sql}\r\nParams: {db.Utilities.SerializeObject(pars.ToDictionary(it => it.ParameterName, it => it.Value))}");
                };
                
                // 全局过滤器 (例如软删除、多租户)
                db.QueryFilter.AddTableFilter<IDeleted>(it => it.IsDeleted == false);
                db.QueryFilter.AddTableFilter<ITenant>(it => it.TenantId == 1); // 模拟租户ID=1
            });

            return db;
        }

        public static void InitDatabase()
        {
            var db = GetInstance();
            db.DbMaintenance.CreateDatabase();
            // CodeFirst: 初始化所有表
            db.CodeFirst.InitTables(typeof(Student), typeof(School), typeof(TreeItem), typeof(JsonEntity));
        }

        #endregion

        #region 2. 基础查询 (Basic Query)

        public static async Task QueryBasics()
        {
            var db = GetInstance();

            // 2.1 列表与单条
            var list = await db.Queryable<Student>().ToListAsync(); // 异步查询
            var item = db.Queryable<Student>().First(it => it.Id == 1);

            // 2.2 排序与分页
            int total = 0;
            var page = db.Queryable<Student>()
                .OrderBy(it => it.Id, OrderByType.Desc)
                .ToPageList(1, 10, ref total);

            // 2.3 常用函数 (Count, Any, Sum, Max)
            bool exists = db.Queryable<Student>().Any(it => it.Age > 18);
            int count = db.Queryable<Student>().Count(it => it.Age > 18);
            
            // 2.4 查询部分列 (Select)
            var partial = db.Queryable<Student>()
                .Select(it => new { it.Id, it.Name })
                .ToList();
                
            // 2.5 动态表达式
            var exp = Expressionable.Create<Student>();
            exp.And(it => it.Id > 0);
            exp.Or(it => it.Name == "Admin");
            var dynList = db.Queryable<Student>().Where(exp.ToExpression()).ToList();
        }

        #endregion

        #region 3. 高级查询 (Advanced Query)

        public static void QueryAdvanced()
        {
            var db = GetInstance();

            // 3.1 分组与去重 (GroupBy & Distinct)
            var groups = db.Queryable<Student>()
                .GroupBy(it => it.SchoolId)
                .Having(it => SqlFunc.AggregateCount(it.Id) > 5)
                .Select(it => new { it.SchoolId, Count = SqlFunc.AggregateCount(it.Id) })
                .ToList();
                
            var distinct = db.Queryable<Student>().Select(it => it.Name).Distinct().ToList();

            // 3.2 联表查询 (Join)
            // 语法: Join<T2, T3>((t1, t2, t3) => ...)
            var joins = db.Queryable<Student>()
                .LeftJoin<School>((stu, sch) => stu.SchoolId == sch.Id)
                .Select((stu, sch) => new { stu.Name, SchoolName = sch.Name })
                .ToList();

            // 3.3 子查询 (SubQuery)
            // 方式1: Where 中使用
            var sub1 = db.Queryable<Student>()
                .Where(it => db.Queryable<School>().Where(s => s.Id == it.SchoolId && s.Name == "Top").Any())
                .ToList();
                
            // 方式2: Select 中使用 (推荐使用 SqlFunc.Subqueryable)
            var sub2 = db.Queryable<Student>()
                .Select(it => new 
                { 
                    it.Name, 
                    SchoolName = SqlFunc.Subqueryable<School>().Where(s => s.Id == it.SchoolId).Select(s => s.Name) 
                })
                .ToList();

            // 3.4 树型查询 (Tree)
            // 需实体类配置 [SugarColumn(IsTreeKey = true)] 和 [SugarColumn(IsTreeParentId = true)]
            var tree = db.Queryable<TreeItem>().ToTree(it => it.Children, it => it.ParentId, 0);

            // 3.5 并集查询 (Union)
            var q1 = db.Queryable<Student>().Select(it => new { Id = it.Id, Name = it.Name });
            var q2 = db.Queryable<School>().Select(it => new { Id = it.Id, Name = it.Name });
            var union = db.Union(q1, q2).ToList();
            
            // 3.6 导航查询 (Includes) - 类似 EF Core
            // 需配置 [Navigate] 特性
            var navList = db.Queryable<Student>()
                .Includes(it => it.School) // 一对一
                // .Includes(it => it.Books) // 一对多
                .ToList();
        }

        #endregion

        #region 4. 增删改查进阶 (CUD Advanced)

        public static void CudAdvanced()
        {
            var db = GetInstance();
            var list = new List<Student>(); 

            // 4.1 插入或更新 (Storageable / Save)
            // 自动判断是插入还是更新，支持大数据量分批
            var x = db.Storageable(list)
                .SplitInsert(it => it.Item.Id == 0) // Id=0 的插入
                .SplitUpdate(it => it.Item.Id > 0)  // Id>0 的更新
                .ExecuteCommand();
                
            // 4.2 导航插入/更新 (Cascading Insert/Update)
            var newStu = new Student 
            { 
                Name = "NavTest", 
                School = new School { Name = "NewSchool" } 
            };
            // 同时插入 Student 和 School
            db.InsertNav(newStu)
                .Include(it => it.School) 
                .ExecuteCommand();

            // 4.3 乐观锁 (并发控制)
            // 需实体字段 [SugarColumn(IsEnableUpdateVersionValidation = true)]
            // db.Updateable(stu).ExecuteCommand(); // 自动检查版本号
            
            // 4.4 逻辑删除
            // db.Deleteable<Student>().In(1).ExecuteCommand(); // 如果配置了逻辑删除，这里会自动变 Update
            
            // 4.5 批量操作 (Bulk)
            // db.Fastest<Student>().BulkCopy(list); // 极速插入
            // db.Fastest<Student>().BulkUpdate(list); // 极速更新
        }

        #endregion

        #region 5. 无实体与低代码 (No Entity / Low Code)

        public static void NoEntityDemo()
        {
            var db = GetInstance();

            // 5.1 动态查询 (Queryable<dynamic>)
            // 适合只知道表名的情况
            var dynamicList = db.Queryable<dynamic>().AS("Student").Where("id > @id", new { id = 1 }).ToList();

            // 5.2 字典插入 (Insertable<Dictionary>)
            var dict = new Dictionary<string, object>();
            dict.Add("Name", "DynamicUser");
            dict.Add("Age", 20);
            db.Insertable(dict).AS("Student").ExecuteCommand();

            // 5.3 动态建表 (DynamicBuilder)
            // 可以在运行时创建类和表
            // db.DynamicBuilder.CreateClass()...
            
            // 5.4 Json 转 SQL
            // db.JsonToSql.ToSql(...)
        }

        #endregion

        #region 6. 架构与高级模式 (Architecture)

        // 6.1 仓储模式 (Repository)
        // 继承 SimpleClient<T> 即可拥有所有基础 CRUD 方法
        public class StudentRepository : SimpleClient<Student>
        {
            public StudentRepository(ISqlSugarClient context = null) : base(context) { }

            public List<Student> GetAdults()
            {
                return Context.Queryable<Student>().Where(it => it.Age >= 18).ToList();
            }
        }

        // 6.2 事务单元 (UnitOfWork)
        public static void UnitOfWorkDemo()
        {
            var db = GetInstance();
            db.BeginTran(); 
            // ... 业务操作
            db.CommitTran();
        }

        // 6.3 跨库查询 (Cross Database)
        // [Tenant("db2")] public class Order { ... }
        // db.QueryableWithAttr<Order>().ToList(); 

        #endregion
        
        #region 7. 其他特性 (Misc)
        
        // 7.1 JSON 类型支持
        public static void JsonTypeDemo()
        {
            var db = GetInstance();
            // 实体中配置 [SugarColumn(IsJson = true)]
            // 数据库存字符串，C# 自动序列化为对象
        }
        
        // 7.2 雪花 ID (Snowflake)
        public static void SnowflakeDemo()
        {
            var id = SnowFlakeSingle.Instance.NextId();
        }
        
        #endregion
    }

    // ==========================================
    // 实体定义 (Entities)
    // ==========================================

    public interface IDeleted { bool IsDeleted { get; set; } }
    public interface ITenant { int TenantId { get; set; } }

    [SugarTable("Student")]
    public class Student : IDeleted, ITenant
    {
        [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
        public int Id { get; set; }

        [SugarColumn(Length = 50)]
        public string Name { get; set; }
        
        public int Age { get; set; }
        public int SchoolId { get; set; }
        
        [SugarColumn(IsNullable = true)]
        public bool IsDeleted { get; set; }
        
        [SugarColumn(IsNullable = true)]
        public int TenantId { get; set; }

        [SugarColumn(IsIgnore = true)]
        [Navigate(NavigateType.OneToOne, nameof(SchoolId))]
        public School School { get; set; }
    }

    [SugarTable("School")]
    public class School
    {
        [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
        public int Id { get; set; }
        public string Name { get; set; }
    }
    
    // 树型实体
    [SugarTable("TreeItem")]
    public class TreeItem
    {
        [SugarColumn(IsPrimaryKey = true)]
        public int Id { get; set; }
        public string Name { get; set; }
        
        [SugarColumn()] // 树父ID
        public int ParentId { get; set; }
        
        [SugarColumn(IsIgnore = true)]
        public List<TreeItem> Children { get; set; }
    }
    
    // JSON 对象实体
    [SugarTable("JsonEntity")]
    public class JsonEntity
    {
        [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
        public int Id { get; set; }
        
        [SugarColumn(IsJson = true)] // 自动序列化
        public Dictionary<string, string> Info { get; set; }
    }

    public class SqlSugarCache : ICacheService
    {
        public void Add<V>(string key, V value) { }
        public void Add<V>(string key, V value, int cacheDurationInSeconds) { }
        public bool ContainsKey<V>(string key) { return false; }
        public V Get<V>(string key) { return default; }
        public IEnumerable<string> GetAllKey<V>() { return null; }
        public V GetOrCreate<V>(string key, Func<V> create, int cacheDurationInSeconds = int.MaxValue) { return create(); }
        public void Remove<V>(string key) { }
    }
}
