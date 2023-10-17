using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Model;
using server.Interfaces;
using server.Dto;

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
            try
            {
                if (admin == null) return BadRequest();

                if (await _repo.Exists(a => a.username == admin.username))
                {
                    return StatusCode(422, "User with that username already exists.");
                }

                if (await _repo.Exists(a => a.email == admin.email))
                {
                    return StatusCode(422, "User with that email already exists.");
                }


                if (await _repo.Insert(admin) == false)
                {
                    return StatusCode(500, "Something went wrong while saving user");
                }

                _logger.LogInformation("Successfully created the new admin");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the CreateAdmin action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the admin {exception.Message}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<Admin>> Put([FromBody] Admin admin)
        {
            try
            {
                if (admin == null) return BadRequest();

                if (await _repo.Get(admin.id) == null)
                {
                    ModelState.AddModelError("", "User does not exist.");
                    return StatusCode(404, ModelState);
                }

                if (await _repo.Update(admin) == false)
                {
                    ModelState.AddModelError("", "Something went wrong while updating the user");
                    return StatusCode(500, ModelState);
                }

                _logger.LogInformation("Successfully updated the new admin");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the UpdateAdmin action: {exception.Message}");
                ModelState.AddModelError("", "Something went wrong while updating user");

                return StatusCode(500, $"Something went wrong updating the admin {exception.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<Admin>> Delete([FromBody] Admin admin)
        {
            try
            {
                if (admin == null) return BadRequest();

                if (await _repo.Get(admin.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Delete(admin) == false)
                {
                    return StatusCode(500, "Something went wrong while deleting the user");
                }

                _logger.LogInformation("Successfully deleted the admin");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the DeleteAdmin action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the admin {exception.Message}");
            }
        }
    }
}