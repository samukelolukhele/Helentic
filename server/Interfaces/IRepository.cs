using System.Linq.Expressions;

namespace server.Interfaces
{
    public interface IRepository<T, TDto>
    where T : class
    where TDto : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T?> Get(Guid id);
        Task<T?> GetByStringValue(Expression<Func<T, bool>> predicate);
        Task<bool> Exists(Expression<Func<T, bool>> predicate);
        Task<bool> Insert(T entity);
        Task<bool> Update(T entity);
        Task<bool> Delete(T entity);
        Task<bool> SaveChanges();
        Task<int> Count();
        string hashPassword(string password);

    }
}