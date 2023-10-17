using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Dto;
using server.Model;

namespace server.Interfaces
{
    public interface ICustomerAddressRepository : IRepository<CustomerAddress, CustomerAddressDto>
    {

    }
}