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
    public class CustomerRepository : GenericRepository<Customer, CustomerDto>, ICustomerRepository
    {
        public CustomerRepository(ServerDbContext context) : base(context) { }


        public override Task<bool> Insert(CustomerDto customer)
        {
            string hashedPassword = hashPassword(customer.password);

            customer.password = hashedPassword;
            customer.email = customer.email.Trim().ToLower();
            _context.Set<CustomerDto>().AddAsync(customer);

            return SaveChanges();
        }

        public override Task<bool> Update(Customer customer)
        {
            _table.Update(customer);
            _table.Entry(customer).Property(a => a.password).IsModified = false;
            return SaveChanges();
        }
    }
}