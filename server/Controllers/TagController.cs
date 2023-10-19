using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TagController : ControllerBase
    {
        private readonly ILogger<Tag> _logger;
        private readonly ITagRepository _repo;

        public TagController(ILogger<Tag> logger, ITagRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Tag>>> GetAll([FromQuery] PaginationParams @params)
        {
            try
            {
                @params.pages = await _repo.Count() / 2;
                @params.items_per_page = 10;
                var Tag = _repo.GetAll().Result
                .OrderBy(Tag => Tag.created_at)
                .Skip((@params.current_page - 1) * @params.items_per_page)
                .Take(@params.items_per_page)
                .Select(Tag => Tag.AsDto());

                if (Tag == null) return NotFound();
                return Ok(Tag);
            }
            catch (Exception exception)
            {
                return StatusCode(500, $"Something went wrong fetching the Tags {exception.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Tag>> Get(Guid id)
        {
            try
            {
                var Tag = await _repo.Get(id);

                if (Tag == null)
                {
                    return NotFound();
                }

                _logger.LogInformation("Successfully found the Tag");

                return Ok(Tag.AsDto());
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the GetTag action: {exception.Message}");
                return StatusCode(500, "Something went wrong getting the Tag");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Tag>> Post([FromBody] Tag Tag)
        {
            try
            {
                if (Tag == null) return BadRequest();

                if (await _repo.Exists(c => Tag.title == c.title))
                {
                    return StatusCode(422, "User already exists");
                }


                if (await _repo.Insert(Tag) == false)
                {
                    return StatusCode(500, "Something went wrong while saving user");
                }

                _logger.LogInformation("Successfully created the new Tag");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the CreateTag action: {exception.Message}");
                ModelState.AddModelError("", "Something went wrong while saving user");

                return StatusCode(500, $"Something went wrong creating the Tag. {exception}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<Tag>> Put([FromBody] Tag Tag)
        {
            try
            {
                if (Tag == null) return BadRequest();

                if (await _repo.Get(Tag.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Update(Tag) == false)
                {
                    return StatusCode(500, "Something went wrong while updating the user");
                }

                _logger.LogInformation("Successfully updated the new Tag");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the UpdateTag action: {exception.Message}");

                return StatusCode(500, $"Something went wrong updating the Tag {exception.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<Tag>> Delete([FromBody] Tag Tag)
        {
            try
            {
                if (Tag == null) return BadRequest();

                if (await _repo.Get(Tag.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Delete(Tag) == false)
                {
                    return StatusCode(500, "Something went wrong while deleting the user");
                }

                _logger.LogInformation("Successfully deleted the Tag");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the DeleteTag action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the Tag {exception.Message}");
            }
        }
    }
}