using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using SharpPad.SqlCore.Interfaces;

namespace SharpPad.SqlCore.Implementations
{
    public class PerformanceMeasurer : IPerformanceMeasurer
    {
        private readonly Dictionary<string, TimeSpan> _measurements = new();
        private readonly Action<string>? _logAction;

        public PerformanceMeasurer(Action<string>? logAction = null)
        {
            _logAction = logAction;
        }

        public async Task<TResult> MeasureAsync<TResult>(string operationName, Func<Task<TResult>> operation)
        {
            var stopwatch = Stopwatch.StartNew();
            try
            {
                var result = await operation();
                stopwatch.Stop();
                RecordMeasurement(operationName, stopwatch.Elapsed);
                return result;
            }
            catch
            {
                stopwatch.Stop();
                RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
                throw;
            }
        }

        public async Task MeasureAsync(string operationName, Func<Task> operation)
        {
            var stopwatch = Stopwatch.StartNew();
            try
            {
                await operation();
                stopwatch.Stop();
                RecordMeasurement(operationName, stopwatch.Elapsed);
            }
            catch
            {
                stopwatch.Stop();
                RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
                throw;
            }
        }

        public TResult Measure<TResult>(string operationName, Func<TResult> operation)
        {
            var stopwatch = Stopwatch.StartNew();
            try
            {
                var result = operation();
                stopwatch.Stop();
                RecordMeasurement(operationName, stopwatch.Elapsed);
                return result;
            }
            catch
            {
                stopwatch.Stop();
                RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
                throw;
            }
        }

        public void Measure(string operationName, Action operation)
        {
            var stopwatch = Stopwatch.StartNew();
            try
            {
                operation();
                stopwatch.Stop();
                RecordMeasurement(operationName, stopwatch.Elapsed);
            }
            catch
            {
                stopwatch.Stop();
                RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
                throw;
            }
        }

        private void RecordMeasurement(string operationName, TimeSpan elapsed)
        {
            _measurements[operationName] = elapsed;
            _logAction?.Invoke($"[Performance] {operationName}: {elapsed.TotalMilliseconds:F2}ms");
        }

        public Dictionary<string, TimeSpan> GetResults() => new(_measurements);

        public void Reset() => _measurements.Clear();
    }
}
