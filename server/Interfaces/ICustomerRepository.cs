using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Model;
using server.Dto;

namespace server.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer, CustomerDto>
    {
    }
}