using server.Data;
using server.Dto;
using server.Interfaces;
using server.Model;

namespace server.Repository
{
    public class TagRepository : GenericRepository<Tag, TagDto>, ITagRepository
    {
        public TagRepository(ServerDbContext context) : base(context)
        { }
    }
}