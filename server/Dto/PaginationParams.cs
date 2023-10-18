using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dto
{
    public class PaginationParams
    {
        public int pages { get; set; }
        public int current_page { get; set; } = 1;
        public int items_per_page { get; set; } = 10;
    }
}