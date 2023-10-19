namespace server.Dto
{
    public record CustomerAddressDto
    (
        Guid id,
         string address,
         string? company,
         string? apartment,
         int zip_code,
         string city,
         string province
    );

    public record CreateCustomerAddressDto
    (
        Guid id,
         string address,
         string? company,
         string? apartment,
         int zip_code,
         string city,
         string province,
         DateTime created_at,
         DateTime updated_at
    );
}