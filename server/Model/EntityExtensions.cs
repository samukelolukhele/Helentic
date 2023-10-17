using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Dto;

namespace server.Model
{
    public static class EntityExtensions
    {
        public static CustomerDto AsDto(this Customer customer)
        {
            return new CustomerDto(
                customer.id,
                customer.first_name,
                customer.last_name,
                customer.email,
                customer.phone_number
            );
        }

        public static AdminDto AsDto(this Admin admin)
        {
            return new AdminDto(
                admin.id,
                admin.first_name,
                admin.last_name,
                admin.email,
                admin.username
            );
        }

        public static CustomerAddressDto AsDto(this CustomerAddress customerAddress)
        {
            return new CustomerAddressDto(
                customerAddress.id,
                customerAddress.address,
                customerAddress.apartment,
                customerAddress.company,
                customerAddress.zip_code,
                customerAddress.city,
                customerAddress.province
            );
        }
    }
}