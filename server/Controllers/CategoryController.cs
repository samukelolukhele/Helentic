using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ILogger<Category> _logger;
        private readonly ICategoryRepository _repo;

        public CategoryController(ILogger<Category> logger, ICategoryRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Category>>> GetAll([FromQuery] PaginationParams @params)
        {
            try
            {
                @params.pages = await _repo.Count() / 2;
                @params.items_per_page = 5;
                var Category = _repo.GetAll().Result
                .OrderBy(Category => Category.created_at)
                .Skip((@params.current_page - 1) * @params.items_per_page)
                .Take(@params.items_per_page)
                .Select(Category => Category.AsDto());

                if (Category == null) return NotFound();
                return Ok(Category);
            }
            catch (Exception exception)
            {
                return StatusCode(500, $"Something went wrong fetching the Categorys {exception.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> Get(Guid id)
        {
            try
            {
                var Category = await _repo.Get(id);

                if (Category == null)
                {
                    return NotFound();
                }

                _logger.LogInformation("Successfully found the Category");

                return Ok(Category.AsDto());
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the GetCategory action: {exception.Message}");
                return StatusCode(500, "Something went wrong getting the Category");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Category>> Post([FromBody] Category Category)
        {
            try
            {
                if (Category == null) return BadRequest();

                if (await _repo.Exists(c => Category.title == c.title))
                {
                    return StatusCode(422, "Category already exists.");
                }


                if (await _repo.Insert(Category) == false)
                {
                    return StatusCode(500, "Something went wrong while saving Category");
                }

                _logger.LogInformation("Successfully created the new Category");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the CreateCategory action: {exception.Message}");
                ModelState.AddModelError("", "Something went wrong while saving Category");

                return StatusCode(500, $"Something went wrong creating the Category. {exception}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<Category>> Put([FromBody] Category Category)
        {
            try
            {
                if (Category == null) return BadRequest();

                if (await _repo.Get(Category.id) == null)
                {
                    return StatusCode(404, "Category does not exist.");
                }

                if (await _repo.Update(Category) == false)
                {
                    return StatusCode(500, "Something went wrong while updating the Category");
                }

                _logger.LogInformation("Successfully updated the new Category");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the UpdateCategory action: {exception.Message}");

                return StatusCode(500, $"Something went wrong updating the Category {exception.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<Category>> Delete([FromBody] Category Category)
        {
            try
            {
                if (Category == null) return BadRequest();

                if (await _repo.Get(Category.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Delete(Category) == false)
                {
                    return StatusCode(500, "Something went wrong while deleting the user");
                }

                _logger.LogInformation("Successfully deleted the Category");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the DeleteCategory action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the Category {exception.Message}");
            }
        }
    }

}