using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IRepository<T, TDto>
    where T : class
    where TDto : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T?> Get(Guid id);
        Task<T?> GetByStringValue(Expression<Func<T, bool>> predicate);
        Task<bool> Insert(TDto entity);
        Task<bool> Update(T entity);
        Task<bool> Delete(T entity);
        Task<bool> SaveChanges();
        string hashPassword(string password);

    }
}