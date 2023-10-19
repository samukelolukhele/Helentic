using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<Product> _logger;
        private readonly IProductRepository _repo;

        // public CustomerRepository _customerRepository { get; }

        public ProductController(ILogger<Product> logger, IProductRepository repo)
        {
            // _customerRepository = customerRepository;
            _logger = logger;
            _repo = repo;

        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Product>>> GetAll([FromQuery] PaginationParams @params)
        {
            try
            {
                @params.pages = await _repo.Count() / 2;
                @params.items_per_page = 10;
                var Customer = _repo.GetAll().Result
                .OrderBy(customer => customer.created_at)
                .Skip((@params.current_page - 1) * @params.items_per_page)
                .Take(@params.items_per_page)
                .Select(customer => customer.AsDto());

                if (Customer == null) return NotFound();
                return Ok(Customer);
            }
            catch (Exception exception)
            {
                return StatusCode(500, $"Something went wrong fetching the Customer Addresss {exception.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(Guid id)
        {
            try
            {
                var Product = await _repo.Get(id);

                if (Product == null)
                {
                    return NotFound();
                }

                _logger.LogInformation("Successfully found the Customer Address");

                return Ok(Product.AsDto());
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the GetProduct action: {exception.Message}");
                return StatusCode(500, "Something went wrong getting the Product");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Post([FromBody] Product Product)
        {
            try
            {
                if (Product == null) return BadRequest();

                if (await _repo.CategoryExist(c => c.id == Product.category_id) == false)
                {
                    return StatusCode(422, "Category does not exist.");
                }

                if (await _repo.Insert(Product) == false)
                {
                    return StatusCode(500, "Something went wrong while saving user");
                }

                _logger.LogInformation("Successfully created the new Product");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the CreateProduct action: {exception.Message}");
                ModelState.AddModelError("", "Something went wrong while saving user");

                return StatusCode(500, $"Something went wrong creating the Product. {exception.Message}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<Product>> Put([FromBody] Product Product)
        {
            try
            {
                if (Product == null) return BadRequest();

                if (await _repo.Get(Product.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Update(Product) == false)
                {
                    return StatusCode(500, "Something went wrong while updating the user");
                }

                _logger.LogInformation("Successfully updated the new Product");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the UpdateProduct action: {exception.Message}");

                return StatusCode(500, $"Something went wrong updating the Product {exception.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<Product>> Delete([FromBody] Product Product)
        {
            try
            {
                if (Product == null) return BadRequest();

                if (await _repo.Get(Product.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Delete(Product) == false)
                {
                    return StatusCode(500, "Something went wrong while deleting the user");
                }

                _logger.LogInformation("Successfully deleted the Product");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the DeleteProduct action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the Product {exception.Message}");
            }
        }
    }
}