using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dto
{
    public class CustomerAddressDto
    {
        public string address { get; set; } = null!;
        public string? company { get; set; }
        public string? apartment { get; set; }
        public int zip_code { get; set; }
        public string city { get; set; } = null!;
        public string province { get; set; } = null!;
        public Guid customer_id { get; set; }
    }
}