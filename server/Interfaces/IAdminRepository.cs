using server.Model;

namespace server.Interfaces
{
    public interface IAdminRepository : IRepository<Admin>
    {
        string hashPassword(string password);
    }
}