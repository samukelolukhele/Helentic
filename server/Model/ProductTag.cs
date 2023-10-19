using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
    public class ProductTag : Base
    {
        [ForeignKey("Product")]
        public Guid product_id { get; set; }
        [ForeignKey("Tag")]
        public Guid tag_id { get; set; }
    }
}