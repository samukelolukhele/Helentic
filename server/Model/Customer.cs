namespace server.Model
{
    class Customer : Base
    {
        public string email { get; set; } = null!;
        public string username { get; set; } = null!;
        public string password { get; set; } = null!;
        public string first_name { get; set; } = null!;
        public string last_name { get; set; } = null!;
        public Guid customer_address_id { get; set; }
        public CustomerAddress customer_address { get; set; } = new CustomerAddress();
        public int phone_number { get; set; }
    }
}