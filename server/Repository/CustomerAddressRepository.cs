using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class CustomerAddressRepository : GenericRepository<CustomerAddress, CustomerAddressDto>, ICustomerAddressRepository
    {
        public CustomerAddressRepository(ServerDbContext context) : base(context)
        { }

        public async Task<bool> CustomerExists(Expression<Func<Customer, bool>> predicate)
        {
            return await _context.Set<Customer>().AnyAsync(predicate);
        }


    }
}