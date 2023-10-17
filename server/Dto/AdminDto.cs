namespace server.Dto
{
    public record AdminDto
    (
        Guid id,
        string username,
         string email,
         string first_name,
         string last_name
    );

}