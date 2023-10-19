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
                customer.phone_number,
                Address: customer.customer_address
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

        public static CategoryDto AsDto(this Category category)
        {
            return new CategoryDto(
                category.id,
                category.title,
                category.description
            );
        }

        public static TagDto AsDto(this Tag tag)
        {
            return new TagDto(tag.title);
        }

        public static OrderStatusDto AsDto(this OrderStatus OrderStatus)
        {
            return new OrderStatusDto(OrderStatus.title);
        }
    }
}