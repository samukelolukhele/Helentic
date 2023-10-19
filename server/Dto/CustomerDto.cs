using server.Model;

namespace server.Dto
{
    public record CustomerDto
    (
        Guid id,
        string email,
        string first_name,
        string last_name,
        int? phone_number,
        CustomerAddress? Address
    );
}