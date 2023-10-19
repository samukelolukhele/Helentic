using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dto
{
    public record CategoryDto
    (
        Guid id,
        string title,
        string description
    );

    public record CreateCategoryDto
    (
        string title,
        string description,
        DateTime created_at,
        DateTime updated_at
    );
}