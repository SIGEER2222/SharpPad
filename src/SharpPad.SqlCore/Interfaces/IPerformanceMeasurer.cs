using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SharpPad.SqlCore.Interfaces
{
    public interface IPerformanceMeasurer
    {
        Task<TResult> MeasureAsync<TResult>(string operationName, Func<Task<TResult>> operation);
        Task MeasureAsync(string operationName, Func<Task> operation);
        TResult Measure<TResult>(string operationName, Func<TResult> operation);
        void Measure(string operationName, Action operation);
        Dictionary<string, TimeSpan> GetResults();
        void Reset();
    }
}
