using server.Dto;
using server.Model;

namespace server.Interfaces
{
    public interface IOrderStatusRepository : IRepository<OrderStatus, OrderStatusDto>
    {

    }
}