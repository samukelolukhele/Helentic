using System.Linq.Expressions;
using server.Dto;
using server.Model;

namespace server.Interfaces
{
    public interface ICustomerAddressRepository : IRepository<CustomerAddress, CustomerAddressDto>
    {
        public Task<bool> CustomerExists(Expression<Func<Customer, bool>> predicate);
    }
}