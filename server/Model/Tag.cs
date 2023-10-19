namespace server.Model
{
    public class Tag : Base
    {
        public string title { get; set; } = null!;
        public virtual ICollection<Product> products { get; set; } = new List<Product>();
    }
}