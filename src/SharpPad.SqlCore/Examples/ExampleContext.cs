namespace SharpPad.SqlCore.Examples
{
    public static class ExampleContext
    {
        public const string Definitions = """
            using System;
            using System.Collections.Generic;
            using SqlSugar;

            public class Student
            {
                [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
                public int Id { get; set; }
                public string Name { get; set; }
                public int SchoolId { get; set; }
                [SugarColumn(IsIgnore = true)]
                [Navigate(NavigateType.OneToOne, nameof(SchoolId))]
                public School School { get; set; }
            }

            public class School
            {
                [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
                public int Id { get; set; }
                public string Name { get; set; }
            }

            [SugarTable("TreeItem")]
            public class TreeItem
            {
                [SugarColumn(IsPrimaryKey = true)]
                public int Id { get; set; }
                public string Name { get; set; }
                [SugarColumn()] 
                public int ParentId { get; set; }
                [SugarColumn(IsIgnore = true)]
                public List<TreeItem> Children { get; set; }
            }

            public class Order
            {
                [SugarColumn(IsPrimaryKey = true)]
                public long Id { get; set; }
                public string Name { get; set; }
                public decimal Price { get; set; }
                public DateTime CreateTime { get; set; }
                [SugarColumn(IsNullable = true)]
                public int? CustomId { get; set; }
            }
            
            public class OrderItem
            {
                [SugarColumn(IsPrimaryKey = true)]
                public long ItemId { get; set; }
                public long OrderId { get; set; }
            }

            public enum OrderType
            {
                Normal = 1,
                Special = 2
            }
            """;
    }
}
