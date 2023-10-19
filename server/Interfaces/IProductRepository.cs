using System.Linq.Expressions;
using server.Dto;
using server.Model;

namespace server.Interfaces
{
    public interface IProductRepository : IRepository<Product, ProductDto>
    {
        Task<bool> CategoryExist(Expression<Func<Category, bool>> predicate);
    }
}