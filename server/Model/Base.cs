using System.ComponentModel.DataAnnotations;

namespace server.Model
{
    public class Base
    {
        [Key]
        public Guid id { get; set; } = Guid.NewGuid();
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }
}