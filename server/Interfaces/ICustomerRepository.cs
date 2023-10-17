using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Model;

namespace server.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer>
    {
    }
}