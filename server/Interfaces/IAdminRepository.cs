using server.Dto;
using server.Model;

namespace server.Interfaces
{
    public interface IAdminRepository : IRepository<Admin, AdminDto>
    {
    }
}