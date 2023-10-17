using System.Security.Cryptography;
using System.Text;
using server.Data;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class AdminRepository : GenericRepository<Admin, AdminDto>, IAdminRepository
    {

        public AdminRepository(ServerDbContext context) : base(context) { }

        public override async Task<bool> Insert(AdminDto admin)
        {
            string hashedPassword = hashPassword(admin.password);

            admin.email = admin.email.Trim().ToLower();
            admin.password = hashedPassword;
            await _context.Set<AdminDto>().AddAsync(admin);
            return await SaveChanges();
        }

        public override Task<bool> Update(Admin admin)
        {
            _table.Update(admin);
            _table.Entry(admin).Property(a => a.password).IsModified = false;
            return SaveChanges();
        }
    }
}