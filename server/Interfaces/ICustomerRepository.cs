using server.Model;
using server.Dto;

namespace server.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer, CustomerDto>
    {
    }
}