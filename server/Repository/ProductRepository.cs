using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class ProductRepository : GenericRepository<Product, ProductDto>, IProductRepository
    {
        public ProductRepository(ServerDbContext context) : base(context)
        { }

        public async Task<bool> CategoryExist(Expression<Func<Category, bool>> predicate)
        {
            return await _context.Set<Category>().AnyAsync(predicate);
        }


    }
}