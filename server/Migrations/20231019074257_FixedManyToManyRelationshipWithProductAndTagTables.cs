using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class FixedManyToManyRelationshipWithProductAndTagTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductTag_Products_productsid",
                table: "ProductTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductTag",
                table: "ProductTag");

            migrationBuilder.DropIndex(
                name: "IX_ProductTag_productsid",
                table: "ProductTag");

            migrationBuilder.DropColumn(
                name: "product_id",
                table: "Tags");

            migrationBuilder.RenameColumn(
                name: "productsid",
                table: "ProductTag",
                newName: "Productsid");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductTag",
                table: "ProductTag",
                columns: new[] { "Productsid", "Tagsid" });

            migrationBuilder.CreateIndex(
                name: "IX_ProductTag_Tagsid",
                table: "ProductTag",
                column: "Tagsid");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductTag_Products_Productsid",
                table: "ProductTag",
                column: "Productsid",
                principalTable: "Products",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductTag_Products_Productsid",
                table: "ProductTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductTag",
                table: "ProductTag");

            migrationBuilder.DropIndex(
                name: "IX_ProductTag_Tagsid",
                table: "ProductTag");

            migrationBuilder.RenameColumn(
                name: "Productsid",
                table: "ProductTag",
                newName: "productsid");

            migrationBuilder.AddColumn<Guid>(
                name: "product_id",
                table: "Tags",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductTag",
                table: "ProductTag",
                columns: new[] { "Tagsid", "productsid" });

            migrationBuilder.CreateIndex(
                name: "IX_ProductTag_productsid",
                table: "ProductTag",
                column: "productsid");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductTag_Products_productsid",
                table: "ProductTag",
                column: "productsid",
                principalTable: "Products",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
