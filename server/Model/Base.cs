using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using UUIDNext;

namespace server.Model
{
    public class Base
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid id { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }
}