using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
    public class Order : Base
    {
        [ForeignKey("Customer")]
        public Guid customer_id { get; set; }
        public virtual Customer Customer { get; set; } = new Customer();
        [ForeignKey("Product")]
        public Guid product_id { get; set; }
        public virtual Product Product { get; set; } = new Product();
        [ForeignKey("OrderStatus")]
        public Guid order_statusid { get; set; }
        public virtual OrderStatus order_status { get; set; } = new OrderStatus();

    }
}