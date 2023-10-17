using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerAddressController : ControllerBase
    {
        private readonly ILogger<CustomerAddress> _logger;
        private readonly ICustomerAddressRepository _repo;

        public CustomerAddressController(ILogger<CustomerAddress> logger, ICustomerAddressRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<CustomerAddress>>> GetAll()
        {
            try
            {
                var CustomerAddress = await _repo.GetAll();
                if (CustomerAddress == null) return NotFound();
                return Ok(CustomerAddress);
            }
            catch (Exception exception)
            {
                return StatusCode(500, $"Something went wrong fetching the CustomerAddresss {exception.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerAddress>> Get(Guid id)
        {
            try
            {
                var CustomerAddress = await _repo.Get(id);

                if (CustomerAddress == null)
                {
                    return NotFound();
                }

                _logger.LogInformation("Successfully found the CustomerAddress");

                return Ok(CustomerAddress);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the GetCustomerAddress action: {exception.Message}");
                return StatusCode(500, "Something went wrong getting the CustomerAddress");
            }
        }

        [HttpPost]
        public async Task<ActionResult<CustomerAddress>> Post([FromBody] CustomerAddress CustomerAddress)
        {
            try
            {
                if (CustomerAddress == null) return BadRequest();



                if (await _repo.Insert(CustomerAddress) == false)
                {
                    return StatusCode(500, "Something went wrong while saving user");
                }

                _logger.LogInformation("Successfully created the new CustomerAddress");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the CreateCustomerAddress action: {exception.Message}");
                ModelState.AddModelError("", "Something went wrong while saving user");

                return StatusCode(500, $"Something went wrong creating the CustomerAddress. {exception}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<CustomerAddress>> Put([FromBody] CustomerAddress CustomerAddress)
        {
            try
            {
                if (CustomerAddress == null) return BadRequest();

                if (await _repo.Get(CustomerAddress.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Update(CustomerAddress) == false)
                {
                    return StatusCode(500, "Something went wrong while updating the user");
                }

                _logger.LogInformation("Successfully updated the new CustomerAddress");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the UpdateCustomerAddress action: {exception.Message}");

                return StatusCode(500, $"Something went wrong updating the CustomerAddress {exception.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<CustomerAddress>> Delete([FromBody] CustomerAddress CustomerAddress)
        {
            try
            {
                if (CustomerAddress == null) return BadRequest();

                if (await _repo.Get(CustomerAddress.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Delete(CustomerAddress) == false)
                {
                    return StatusCode(500, "Something went wrong while deleting the user");
                }

                _logger.LogInformation("Successfully deleted the CustomerAddress");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the DeleteCustomerAddress action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the CustomerAddress {exception.Message}");
            }
        }
    }
}