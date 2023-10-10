using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
    public class Tag : Base
    {
        public string title { get; set; } = null!;
        [ForeignKey("Product")]
        public Guid product_id { get; set; }
        public ICollection<Product> products { get; set; } = new List<Product>();
    }
}