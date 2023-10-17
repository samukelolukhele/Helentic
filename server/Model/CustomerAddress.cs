using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
    public class CustomerAddress : Base
    {
        public string address { get; set; } = null!;
        public string? company { get; set; }
        public string? apartment { get; set; }
        public int zip_code { get; set; }
        public string city { get; set; } = null!;
        public string province { get; set; } = null!;
        [ForeignKey("Customer")]
        public Guid customer_id { get; set; }
    }
}