using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task<ICollection<T>> GetAll(Expression<Func<T, bool>> match);
        Task<T?> Get(Guid id);
        Task<T?> GetByStringValue(string query);
        Task<bool> Insert(T entity);
        Task<bool> Update(T entity);
        Task<bool> Delete(T entity);
        Task<bool> SaveChanges();
    }
}