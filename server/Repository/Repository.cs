using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Interfaces;

namespace server.Repository
{
    abstract public class GenericRepository<T> : IRepository<T> where T : class
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

        public virtual Task<bool> Delete(T entity)
        {
            _table.Remove(entity);
            return SaveChanges();
        }

        public virtual async Task<T?> Get(Guid id)
        {

            return await _table.FindAsync(id);
        }

        public virtual async Task<bool> Insert(T entity)
        {
            _table.Add(entity);
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

        public virtual async Task<T?> GetByStringValue(string query)
        {
            return await _table.FindAsync(query);
        }
    }
}