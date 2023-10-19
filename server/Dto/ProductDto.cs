using server.Model;

namespace server.Dto
{
    public record ProductDto(
        string title,
        string description,
        int price,
        Category? category,
        string thumbnail,
        List<string> images,
        ICollection<Tag>? Tags
    );

    public record CreateProductDto(
        Guid id,
        string title,
        string description,
        int price,
        Category? category,
        string thumbnail,
        List<string> images,
        ICollection<Tag>? Tags,
        DateTime created_at,
        DateTime updated_at
    );
}