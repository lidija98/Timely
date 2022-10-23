using System;
using Microsoft.EntityFrameworkCore;
using Timely.Models;

namespace Timely.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
    }
}

