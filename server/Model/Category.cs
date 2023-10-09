namespace server.Model
{
    class Category : Base
    {
        public string title { get; set; }
        public string description { get; set; }
        public List<Product> products { get; set; }
    }
}