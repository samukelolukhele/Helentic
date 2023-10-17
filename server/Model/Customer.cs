namespace server.Model
{
    public class Customer : Base
    {
        public string email { get; set; } = null!;
        public string password { get; set; } = null!;
        public string first_name { get; set; } = null!;
        public string last_name { get; set; } = null!;
        public CustomerAddress? customer_address { get; set; }
        public int? phone_number { get; set; }
    }
}