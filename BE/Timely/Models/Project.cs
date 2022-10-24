using System;
using System.ComponentModel.DataAnnotations;

namespace Timely.Models
{
    public class Project
    {
        public Guid Id { get; set; }

        [StringLength(30)]
        public string Projects { get; set; } = string.Empty;

        public DateTime Start { get; set; }

        public DateTime Stop { get; set; }

        public DateTime Duration { get; set; }

    }
}

