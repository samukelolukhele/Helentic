using server.Data;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class CategoryRepository : GenericRepository<Category, CategoryDto>, ICategoryRepository
    {
        public CategoryRepository(ServerDbContext context) : base(context)
        { }
    }
}