using System;
namespace Timely.Models
{
    public class Projects
    {
        public string ProjectName { get; set; } = string.Empty;

        public DateTimeOffset Start { get; set; }

        public DateTimeOffset Stop { get; set; }

        public DateTimeOffset Duration { get; set; }

    }
}

