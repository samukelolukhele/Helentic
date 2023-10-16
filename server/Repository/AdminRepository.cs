using System.Security.Cryptography;
using System.Text;
using server.Data;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class AdminRepository : GenericRepository<Admin>, IAdminRepository
    {

        public AdminRepository(ServerDbContext context) : base(context)
        {
        }

        public string hashPassword(string password)
        {
            var sha = SHA256.Create();
            byte[] asByteArray = Encoding.UTF8.GetBytes(password);
            byte[] hash = sha.ComputeHash(asByteArray);

            return Convert.ToBase64String(hash);
        }

        public override Task<bool> Insert(Admin admin)
        {
            string hashedPassword = hashPassword(admin.password);

            admin.email = admin.email.Trim().ToLower();
            admin.password = hashedPassword;
            _context.Admins.Add(admin);
            return SaveChanges();
        }

        public override Task<bool> Update(Admin admin)
        {
            _table.Update(admin);
            _table.Entry(admin).Property(a => a.password).IsModified = false;
            return SaveChanges();
        }
    }
}