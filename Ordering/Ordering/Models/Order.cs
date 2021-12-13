using System;
using Newtonsoft.Json;
namespace Orders.Models
{
    public class Order
    {
        public int Id { get; set; }
        [JsonRequired]
        public int Subtotal { get; set; }
        [JsonRequired]
        public int CustomerId { get; set; }
        [JsonRequired]
        public int AddressId { get; set; }
        [JsonRequired]
        public int RestaurantId { get; set; }
        public Order()
        {
        }
    }
}

