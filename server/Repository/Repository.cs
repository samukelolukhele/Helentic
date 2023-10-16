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
        private readonly ServerDbContext _context;
        private DbSet<T> _table;

        public GenericRepository(ServerDbContext context)
        {
            _context = context;
            _table = _context.Set<T>();
        }

        public GenericRepository()
        {
            this._context = null!;
            this._table = null!;

        }

        public async Task<ICollection<T>> GetAll(Expression<Func<T, bool>> match)
        {
            return await _table.Where(match).ToListAsync();
        }

        public Task<bool> Delete(T entity)
        {
            _table.Remove(entity);
            return SaveChanges();
        }

        public async Task<T?> Get(Guid id)
        {

            return await _table.FindAsync(id);
        }

        public async Task<bool> Insert(T entity)
        {
            _table.Add(entity);
            return await SaveChanges();
        }

        public async Task<bool> SaveChanges()
        {
            return await _context.SaveChangesAsync().ConfigureAwait(false) > 0;
        }

        public async Task<bool> Update(T entity)
        {
            _table.Update(entity);
            return await SaveChanges();
        }

        public async Task<T?> GetByStringValue(string query)
        {
            return await _table.FindAsync(query);
        }
    }
}