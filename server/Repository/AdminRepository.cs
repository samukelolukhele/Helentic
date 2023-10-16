using BCrypt.Net;
using server.Data;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class AdminRepository : GenericRepository<Admin>, IAdminRepository
    {
        public ServerDbContext _context { get; }

        public AdminRepository(ServerDbContext context)
        {
            _context = context;
        }
        public Task<bool> CreateAdmin(Admin admin)
        {
            admin.email = admin.email.Trim().ToLower();
            admin.password = BCrypt.Net.BCrypt.HashPassword(admin.password);
            _context.Admins.Add(admin);
            return SaveChanges();
        }
    }
}