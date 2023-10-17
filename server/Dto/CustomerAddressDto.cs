using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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