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
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<Customer> _logger;
        private readonly ICustomerRepository _repo;

        public CustomerController(ILogger<Customer> logger, ICustomerRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Customer>>> GetAll([FromQuery] PaginationParams @params)
        {
            try
            {
                @params.pages = await _repo.Count() / 2;
                var Customer = _repo.GetAll().Result
                .OrderBy(customer => customer.created_at)
                .Skip((@params.current_page - 1) * @params.items_per_page)
                .Take(10)
                .Select(customer => customer.AsDto());

                if (Customer == null) return NotFound();
                return Ok(Customer);
            }
            catch (Exception exception)
            {
                return StatusCode(500, $"Something went wrong fetching the Customers {exception.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> Get(Guid id)
        {
            try
            {
                var Customer = await _repo.Get(id);

                if (Customer == null)
                {
                    return NotFound();
                }

                _logger.LogInformation("Successfully found the Customer");

                return Ok(Customer.AsDto());
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the GetCustomer action: {exception.Message}");
                return StatusCode(500, "Something went wrong getting the Customer");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Customer>> Post([FromBody] Customer Customer)
        {
            try
            {
                if (Customer == null) return BadRequest();

                if (await _repo.Exists(c => Customer.email == c.email))
                {
                    return StatusCode(422, "User already exists");
                }


                if (await _repo.Insert(Customer) == false)
                {
                    return StatusCode(500, "Something went wrong while saving user");
                }

                _logger.LogInformation("Successfully created the new Customer");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the CreateCustomer action: {exception.Message}");
                ModelState.AddModelError("", "Something went wrong while saving user");

                return StatusCode(500, $"Something went wrong creating the Customer. {exception}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<Customer>> Put([FromBody] Customer Customer)
        {
            try
            {
                if (Customer == null) return BadRequest();

                if (await _repo.Get(Customer.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Update(Customer) == false)
                {
                    return StatusCode(500, "Something went wrong while updating the user");
                }

                _logger.LogInformation("Successfully updated the new Customer");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the UpdateCustomer action: {exception.Message}");

                return StatusCode(500, $"Something went wrong updating the Customer {exception.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<Customer>> Delete([FromBody] Customer Customer)
        {
            try
            {
                if (Customer == null) return BadRequest();

                if (await _repo.Get(Customer.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Delete(Customer) == false)
                {
                    return StatusCode(500, "Something went wrong while deleting the user");
                }

                _logger.LogInformation("Successfully deleted the Customer");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the DeleteCustomer action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the Customer {exception.Message}");
            }
        }
    }
}