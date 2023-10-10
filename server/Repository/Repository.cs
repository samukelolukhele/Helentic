using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Interfaces;

namespace server.Repository
{
    public class Repository <T> : IRepository <T>  where T : class
    {
        private readonly ServerDbContext _context;
        private DbSet<T> _table;

        public Repository(ServerDbContext context){
            _context = context;
            _table = _context.Set<T>();
        }

        public Task<bool> Delete(T entity)
        {
            await _table.Remove(entity);
            return SaveChanges();
        }

        public Task<T> Get(Guid id)
        {
           return await _table.Find(id)
        }

        public void Insert(T entity)
        {
        await _table.Add(entity);
        return SaveChanges();
        }

        public async Task<bool> SaveChanges()
        {
            return await _context.SaveChangesAsync().ConfigureAwait(false) > 0;
        }

        public Task<bool> Update(T entity)
        {
            await _table.Update(entity);
            return SaveChanges();
        }
    }
}