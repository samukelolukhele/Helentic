using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Model;
using server.Interfaces;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ILogger<Admin> _logger;
        private readonly IAdminRepository _repo;

        public AdminController(ILogger<Admin> logger, IAdminRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Admin>>> GetAllAsync()
        {
            try
            {
                var admin = await _repo.GetAll();
                if (admin == null) return NotFound();
                return Ok(admin);
            }
            catch (Exception exception)
            {
                return StatusCode(500, $"Something went wrong fetching the admins {exception.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAsync(Guid id)
        {
            try
            {
                var admin = await _repo.Get(id);

                if (admin == null)
                {
                    return NotFound();
                }

                _logger.LogInformation("Successfully found the admin");

                return Ok(admin);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the GetAdmin action: {exception.Message}");
                return StatusCode(500, "Something went wrong getting the admin");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Admin>> Post([FromBody] Admin admin)
        {
            // try
            // {
            if (admin == null) return BadRequest();

            if (_repo.GetByStringValue(admin.username) == null)
            {
                ModelState.AddModelError("", "User already exists");
                return StatusCode(422, ModelState);
            }


            if (await _repo.Insert(admin) == false)
            {
                ModelState.AddModelError("", "Something went wrong while saving user");
                return StatusCode(500, ModelState);
            }

            _logger.LogInformation("Successfully created the new admin");


            return NoContent();
        }
        //     catch (Exception exception)
        //     {
        //         _logger.LogError($"Something went wrong in the CreateAdmin action: {exception.Message}");
        //         ModelState.AddModelError("", "Something went wrong while saving user");

        //         return StatusCode(500, $"Something went wrong creating the admin {exception.Message}");
        //     }
        // }
    }
}