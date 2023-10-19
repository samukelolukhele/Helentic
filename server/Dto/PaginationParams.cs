namespace server.Dto
{
    public class PaginationParams
    {
        private int _maxItemsPerPage = 50;
        private int itemsPerPage;
        public int pages { get; set; }
        public int current_page { get; set; } = 1;
        public int items_per_page
        {
            get => itemsPerPage;
            set => itemsPerPage = value > _maxItemsPerPage ? _maxItemsPerPage : value;
        }
    }
}