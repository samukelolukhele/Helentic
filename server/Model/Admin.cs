namespace server.Model
{
    public class Admin : Base
    {
        public string username { get; set; } = null!;
        public string email { get; set; } = null!;
        public string first_name { get; set; } = null!;
        public string last_name { get; set; } = null!;

    }
}