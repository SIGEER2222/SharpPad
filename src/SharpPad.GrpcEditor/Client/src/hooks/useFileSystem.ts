import { useState, useEffect } from 'react';

export interface SourceFile {
    id: string;
    name: string;
    path: string; // Relative path (folder structure), empty for root
    content: string;
    type: 'script' | 'helper';
}

export interface Project {
    id: string;
    name: string;
    files: SourceFile[];
    lastActiveFileId: string;
}

const DEFAULT_FILES: SourceFile[] = [
    {
        id: '1',
        name: 'Program.cs',
        path: 'Scripts',
        type: 'script',
        content: `using System;
using System.Collections.Generic;
using System.Linq;

// Top-level statements are supported!
var users = new List<User>
{
    new User { Id = 1, Name = "Alice", Role = "Admin" },
    new User { Id = 2, Name = "Bob", Role = "User" }
};

users.Dump("Users");
Helper.SayHello();

public class User { public int Id { get; set; } public string Name { get; set; } public string Role { get; set; } }
`
    },
    {
        id: '2',
        name: 'Helper.cs',
        path: 'Helpers',
        type: 'helper',
        content: `using System;

public static class Helper
{
    public static void SayHello()
    {
        "Hello from Helper!".Dump();
    }
}
`
    }
];

const DEFAULT_PROJECT: Project = {
    id: 'default',
    name: 'Default Project',
    files: DEFAULT_FILES,
    lastActiveFileId: '1'
};

const SQLSUGAR_PROJECT: Project = {
    id: 'sqlsugar-dojo',
    name: 'SqlSugar Dojo',
    lastActiveFileId: 's1',
    files: [
        {
            id: 's1',
            name: 'Run.cs',
            path: 'Scripts',
            type: 'script',
            content: `using System;
using System.Linq;
using SqlSugar;

// Initialize DB
var db = DbContext.GetClient();
DbContext.Seed(db);

"=== 1. All Students ===".Dump();
db.Queryable<Student>().ToList().Dump();

"=== 2. Students with Score > 80 ===".Dump();
db.Queryable<Student>()
  .Where(s => s.Score > 80)
  .ToList()
  .Dump();

"=== 3. Student Courses (Join) ===".Dump();
db.Queryable<Student>()
  .LeftJoin<StudentCourse>((s, sc) => s.Id == sc.StudentId)
  .LeftJoin<Course>((s, sc, c) => sc.CourseId == c.Id)
  .Select((s, sc, c) => new { Student = s.Name, Course = c.Name, Score = sc.Score })
  .ToList()
  .Dump();

"=== 4. Average Score per Course ===".Dump();
db.Queryable<StudentCourse>()
  .LeftJoin<Course>((sc, c) => sc.CourseId == c.Id)
  .GroupBy((sc, c) => c.Name)
  .Select((sc, c) => new { Course = c.Name, AvgScore = SqlFunc.AggregateAvg(sc.Score) })
  .ToList()
  .Dump();
`
        },
        {
            id: 's2',
            name: 'Models.cs',
            path: 'Helpers',
            type: 'helper',
            content: `using SqlSugar;

public class Student
{
    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
    public int Id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    public int Score { get; set; } // Overall Score
}

public class Course
{
    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
    public int Id { get; set; }
    public string Name { get; set; }
}

public class StudentCourse
{
    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int CourseId { get; set; }
    public int Score { get; set; }
}
`
        },
        {
            id: 's3',
            name: 'DbContext.cs',
            path: 'Helpers',
            type: 'helper',
            content: `using System;
using System.Collections.Generic;
using SqlSugar;

public static class DbContext
{
    public static SqlSugarClient GetClient()
    {
        return new SqlSugarClient(new ConnectionConfig()
        {
            ConnectionString = "DataSource=:memory:",
            DbType = DbType.Sqlite,
            IsAutoCloseConnection = false,
            InitKeyType = InitKeyType.Attribute
        });
    }

    public static void Seed(SqlSugarClient db)
    {
        // Create Tables
        db.CodeFirst.InitTables<Student>();
        db.CodeFirst.InitTables<Course>();
        db.CodeFirst.InitTables<StudentCourse>();

        if (db.Queryable<Student>().Any()) return;

        // Seed Data
        var students = new List<Student>();
        var names = new[] { "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi" };
        var rand = new Random();

        foreach (var name in names)
        {
            students.Add(new Student 
            { 
                Name = name, 
                Age = rand.Next(18, 25),
                Score = rand.Next(60, 100)
            });
        }
        db.Insertable(students).ExecuteCommand();

        var courses = new List<Course>
        {
            new Course { Name = "Math" },
            new Course { Name = "Physics" },
            new Course { Name = "Chemistry" }
        };
        db.Insertable(courses).ExecuteCommand();
        
        // Assign courses
        var studentCourses = new List<StudentCourse>();
        var sList = db.Queryable<Student>().ToList();
        var cList = db.Queryable<Course>().ToList();

        foreach(var s in sList)
        {
            foreach(var c in cList)
            {
                if (rand.Next(0, 2) == 1) // 50% chance
                {
                    studentCourses.Add(new StudentCourse
                    {
                        StudentId = s.Id,
                        CourseId = c.Id,
                        Score = rand.Next(50, 100)
                    });
                }
            }
        }
        db.Insertable(studentCourses).ExecuteCommand();
    }
}
`
        }
    ]
};

export function useFileSystem() {
    // Projects State
    const [projects, setProjects] = useState<Project[]>(() => {
        let loadedProjects: Project[] = [];
        const savedProjects = localStorage.getItem('sharpPad_projects');
        
        if (savedProjects) {
            loadedProjects = JSON.parse(savedProjects);
        } else {
            // Migration from legacy single-project mode
            const legacyFiles = localStorage.getItem('sharpPad_files');
            if (legacyFiles) {
                const parsedFiles = JSON.parse(legacyFiles);
                const migratedFiles = parsedFiles.map((f: any) => ({ 
                    ...f, 
                    path: f.path || (f.type === 'script' ? 'Scripts' : 'Helpers') 
                }));
                loadedProjects = [{
                    id: 'default',
                    name: 'Legacy Project',
                    files: migratedFiles,
                    lastActiveFileId: migratedFiles[0]?.id || '1'
                }];
            } else {
                loadedProjects = [DEFAULT_PROJECT];
            }
        }

        // Ensure SqlSugar Dojo exists
        if (!loadedProjects.find(p => p.id === SQLSUGAR_PROJECT.id)) {
            loadedProjects.push(SQLSUGAR_PROJECT);
        }

        return loadedProjects;
    });

    const [activeProjectId, setActiveProjectId] = useState<string>(() => {
        return localStorage.getItem('sharpPad_activeProjectId') || projects[0]?.id || 'default';
    });

    // Persistence
    useEffect(() => {
        localStorage.setItem('sharpPad_projects', JSON.stringify(projects));
    }, [projects]);

    useEffect(() => {
        localStorage.setItem('sharpPad_activeProjectId', activeProjectId);
    }, [activeProjectId]);

    // Derived State
    const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];
    const files = activeProject.files;
    const activeFileId = activeProject.lastActiveFileId;
    const activeFile = files.find(f => f.id === activeFileId) || files[0];

    // Project Actions
    const createProject = (name: string, templateFiles?: SourceFile[]) => {
        const newProject: Project = {
            id: Date.now().toString(),
            name,
            files: templateFiles || DEFAULT_FILES, // Start with template
            lastActiveFileId: templateFiles && templateFiles.length > 0 ? templateFiles[0].id : '1'
        };
        setProjects(prev => [...prev, newProject]);
        setActiveProjectId(newProject.id);
    };

    const deleteProject = (id: string) => {
        if (projects.length <= 1) return; // Prevent deleting last project
        const newProjects = projects.filter(p => p.id !== id);
        setProjects(newProjects);
        if (activeProjectId === id) {
            setActiveProjectId(newProjects[0].id);
        }
    };

    // File Actions (Scoped to Active Project)
    const setActiveFileId = (id: string) => {
        setProjects(prev => prev.map(p => 
            p.id === activeProjectId ? { ...p, lastActiveFileId: id } : p
        ));
    };

    const updateFileContent = (id: string, content: string) => {
        setProjects(prev => prev.map(p => 
            p.id === activeProjectId ? {
                ...p,
                files: p.files.map(f => f.id === id ? { ...f, content } : f)
            } : p
        ));
    };

    const addFile = (name: string, type: 'script' | 'helper', path?: string) => {
        const finalPath = path || (type === 'script' ? 'Scripts' : 'Helpers');
        
        const newFile: SourceFile = {
            id: Date.now().toString(),
            name,
            path: finalPath,
            type,
            content: type === 'script' ? 
`using System;
"New Script".Dump();` : 
`using System;
public class NewClass { }`
        };

        setProjects(prev => prev.map(p => 
            p.id === activeProjectId ? {
                ...p,
                files: [...p.files, newFile],
                lastActiveFileId: newFile.id
            } : p
        ));
    };

    const removeFile = (id: string) => {
        setProjects(prev => prev.map(p => {
            if (p.id !== activeProjectId) return p;
            
            if (p.files.length <= 1) return p; // Don't delete last file

            const newFiles = p.files.filter(f => f.id !== id);
            let newActiveId = p.lastActiveFileId;
            if (p.lastActiveFileId === id) {
                newActiveId = newFiles[0].id;
            }

            return { ...p, files: newFiles, lastActiveFileId: newActiveId };
        }));
    };

    return { 
        // File System (Legacy Interface + Active Project)
        files, 
        activeFile, 
        activeFileId, 
        setActiveFileId, 
        updateFileContent, 
        addFile, 
        removeFile,

        // Project System (New)
        projects,
        activeProjectId,
        setActiveProjectId,
        createProject,
        deleteProject
    };
}
