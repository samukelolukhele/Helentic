namespace server.Dto
{
    public class CustomerDto
    {
        public string email { get; set; } = null!;
        public string password { get; set; } = null!;
        public string first_name { get; set; } = null!;
        public string last_name { get; set; } = null!;
        public int? phone_number { get; set; }
    }
}