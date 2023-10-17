using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Data;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class CustomerAddressRepository : GenericRepository<CustomerAddress, CustomerDto>, ICustomerAddressRepository
    {
        public CustomerAddressRepository(ServerDbContext context) : base(context)
        { }

        public Task<bool> Insert(CustomerAddressDto entity)
        {
            throw new NotImplementedException();
        }
    }
}