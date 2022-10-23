using System;
using System.ComponentModel.DataAnnotations;

namespace Timely.Models
{
    public class Projects
    {
        public Guid Id { get; set; }

        [StringLength(30)]
        public string ProjectName { get; set; } = string.Empty;

        public DateTimeOffset Start { get; set; }

        public DateTimeOffset Stop { get; set; }

        public DateTimeOffset Duration { get; set; }

    }
}

