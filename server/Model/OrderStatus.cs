namespace server.Model
{
    public class OrderStatus : Base
    {
        public string title { get; set; } = null!;
        public virtual ICollection<Order> orders { get; set; } = new List<Order>();
    }
}