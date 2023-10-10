namespace server.Model
{
    public class OrderStatus : Base
    {
        public string title { get; set; } = null!;
        public ICollection<Order> orders { get; set; } = new List<Order>();
    }
}