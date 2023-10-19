using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderStatusController : ControllerBase
    {
        private readonly ILogger<OrderStatus> _logger;
        private readonly IOrderStatusRepository _repo;

        public OrderStatusController(ILogger<OrderStatus> logger, IOrderStatusRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<OrderStatus>>> GetAll([FromQuery] PaginationParams @params)
        {
            try
            {
                @params.pages = await _repo.Count() / 2;
                @params.items_per_page = 10;
                var OrderStatus = _repo.GetAll().Result
                .OrderBy(OrderStatus => OrderStatus.created_at)
                .Skip((@params.current_page - 1) * @params.items_per_page)
                .Take(@params.items_per_page)
                .Select(OrderStatus => OrderStatus.AsDto());

                if (OrderStatus == null) return NotFound();
                return Ok(OrderStatus);
            }
            catch (Exception exception)
            {
                return StatusCode(500, $"Something went wrong fetching the OrderStatuss {exception.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderStatus>> Get(Guid id)
        {
            try
            {
                var OrderStatus = await _repo.Get(id);

                if (OrderStatus == null)
                {
                    return NotFound();
                }

                _logger.LogInformation("Successfully found the OrderStatus");

                return Ok(OrderStatus.AsDto());
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the GetOrderStatus action: {exception.Message}");
                return StatusCode(500, "Something went wrong getting the OrderStatus");
            }
        }

        [HttpPost]
        public async Task<ActionResult<OrderStatus>> Post([FromBody] OrderStatus OrderStatus)
        {
            try
            {
                if (OrderStatus == null) return BadRequest();

                if (await _repo.Exists(c => OrderStatus.title == c.title))
                {
                    return StatusCode(422, "User already exists");
                }


                if (await _repo.Insert(OrderStatus) == false)
                {
                    return StatusCode(500, "Something went wrong while saving user");
                }

                _logger.LogInformation("Successfully created the new OrderStatus");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the CreateOrderStatus action: {exception.Message}");
                ModelState.AddModelError("", "Something went wrong while saving user");

                return StatusCode(500, $"Something went wrong creating the OrderStatus. {exception}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<OrderStatus>> Put([FromBody] OrderStatus OrderStatus)
        {
            try
            {
                if (OrderStatus == null) return BadRequest();

                if (await _repo.Get(OrderStatus.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Update(OrderStatus) == false)
                {
                    return StatusCode(500, "Something went wrong while updating the user");
                }

                _logger.LogInformation("Successfully updated the new OrderStatus");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the UpdateOrderStatus action: {exception.Message}");

                return StatusCode(500, $"Something went wrong updating the OrderStatus {exception.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<OrderStatus>> Delete([FromBody] OrderStatus OrderStatus)
        {
            try
            {
                if (OrderStatus == null) return BadRequest();

                if (await _repo.Get(OrderStatus.id) == null)
                {
                    return StatusCode(404, "User does not exist.");
                }

                if (await _repo.Delete(OrderStatus) == false)
                {
                    return StatusCode(500, "Something went wrong while deleting the user");
                }

                _logger.LogInformation("Successfully deleted the OrderStatus");


                return NoContent();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Something went wrong in the DeleteOrderStatus action: {exception.Message}");

                return StatusCode(500, $"Something went wrong creating the OrderStatus {exception.Message}");
            }
        }
    }
}