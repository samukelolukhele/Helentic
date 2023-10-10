using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
    public class Product : Base
    {
        public string title { get; set; } = null!;
        public string description { get; set; } = null!;
        public int price { get; set; }
        [ForeignKey("Category")]
        public Guid category_id { get; set; }
        public Category category { get; set; } = new Category();
        public string thumbnail { get; set; } = null!;
        public List<string> images { get; set; } = new List<string>();
        public ICollection<Tag> Tags { get; set; } = new List<Tag>();
    }
}