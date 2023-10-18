using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    abstract public class GenericRepository<T, TDto> : IRepository<T, TDto>
    where T : class
    where TDto : class
    {
        internal readonly ServerDbContext _context;
        internal DbSet<T> _table;

        public GenericRepository(ServerDbContext context)
        {
            _context = context;
            _table = _context.Set<T>();
        }


        public virtual async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public virtual async Task<bool> Delete(T entity)
        {
            _table.Remove(entity);
            return await SaveChanges();
        }

        public virtual async Task<T?> Get(Guid id)
        {

            return await _context.FindAsync<T>(id);
        }

        public virtual async Task<bool> Insert(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            return await SaveChanges();
        }

        public virtual async Task<bool> SaveChanges()
        {
            return await _context.SaveChangesAsync().ConfigureAwait(false) > 0;
        }

        public virtual async Task<bool> Update(T entity)
        {
            _table.Update(entity);
            return await SaveChanges();
        }

        public virtual async Task<T?> GetByStringValue(Expression<Func<T, bool>> predicate)
        {
            return await _table.Where(predicate).FirstOrDefaultAsync();
        }

        public virtual async Task<bool> Exists(Expression<Func<T, bool>> predicate)
        {
            return await _table.AnyAsync(predicate);
        }

        public virtual async Task<int> Count()
        {
            return await _table.CountAsync();
        }

        public string hashPassword(string password)
        {
            var sha = SHA256.Create();
            byte[] asByteArray = Encoding.UTF8.GetBytes(password);
            byte[] hash = sha.ComputeHash(asByteArray);

            return Convert.ToBase64String(hash);
        }
    }
}