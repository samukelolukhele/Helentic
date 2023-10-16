using server.Model;

namespace server.Interfaces
{
    public interface IAdminRepository : IRepository<Admin>
    {
        Task<bool> CreateAdmin(Admin admin);
    }
}