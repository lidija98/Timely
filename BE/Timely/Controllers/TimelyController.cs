using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Timely.Data;
using Timely.Models;

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
        public async Task<ActionResult<IEnumerable<Project>>> GetAllProjects()
        {
            return await _dataContext.Projects.ToListAsync();

        }

        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<Project>> GetProject(Guid id)
        {
            var project = await _dataContext.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProject(Guid id, Project project)
        {
            if(id != project.Id)
            {
                return BadRequest();
            }

            _dataContext.Entry(project).State = EntityState.Modified;

            try
            {
                await _dataContext.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(Project project)
        {
            project.Id = Guid.NewGuid();

            await _dataContext.Projects.AddAsync(project);

            await _dataContext.SaveChangesAsync();

            return Ok(project);
        }

        private bool ProjectExists(Guid id)
        {
            return _dataContext.Projects.Any(e => e.Id == id);
        }
    }
}

