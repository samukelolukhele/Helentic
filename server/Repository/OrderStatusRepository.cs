using server.Data;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class OrderStatusRepository : GenericRepository<OrderStatus, OrderStatusDto>, IOrderStatusRepository
    {
        public OrderStatusRepository(ServerDbContext context) : base(context)
        { }
    }
}