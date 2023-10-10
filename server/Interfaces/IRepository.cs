using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IRepository <T> where T : class
    {
        Task<T> Get(Guid id);
        void Insert(T entity);
        Task<bool> Update(T entity);
        Task<bool> Delete(T entity);
        Task<bool> SaveChanges();
    }
}