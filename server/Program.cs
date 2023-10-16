using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Interfaces;
using server.Model;
using server.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Logging.AddConsole();
builder.Logging.ClearProviders();
builder.Services.AddLogging();
// builder.Services.AddScoped<IRepository<Admin>, GenericRepository<Admin>>();
builder.Services.AddScoped<IAdminRepository, AdminRepository>();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ServerDbContext>(options => options.UseNpgsql(
    builder.Configuration.GetConnectionString("DefaultConnection")
));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
