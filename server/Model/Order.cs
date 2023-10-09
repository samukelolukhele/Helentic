using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
    class Order : Base
    {
        [ForeignKey("Customer")]
        public Guid customer_id { get; set; }
        public Customer Customer { get; set; } = new Customer();
        [ForeignKey("Product")]
        public Guid product_id { get; set; }
        public Product Product { get; set; } = new Product();
        [ForeignKey("OrderStatus")]
        public Guid orderstatus_id { get; set; }
        public OrderStatus order_status { get; set; } = new OrderStatus();

    }
}