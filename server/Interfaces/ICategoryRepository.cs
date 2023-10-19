using server.Dto;
using server.Model;

namespace server.Interfaces
{
    public interface ICategoryRepository : IRepository<Category, CategoryDto>
    {

    }
}