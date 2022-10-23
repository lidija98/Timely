using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Timely.Data;

namespace Timely.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TimelyController : Controller
    {
        private readonly DataContext _dataContext;

        public TimelyController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProjects()
        {
            var projects = await _dataContext.Projects.ToListAsync();

            return Ok(projects);
        }
    }
}

