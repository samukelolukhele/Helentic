namespace server.Model
{
    public class Category : Base
    {
        public string title { get; set; } = null!;
        public string description { get; set; } = null!;
        public virtual ICollection<Product>? products { get; set; } = new List<Product>();
    }
}