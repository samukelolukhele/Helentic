namespace server.Model
{
    class Category : Base
    {
        public string title { get; set; } = null!;
        public string description { get; set; } = null!;
        public ICollection<Product> products { get; set; } = new List<Product>();
    }
}