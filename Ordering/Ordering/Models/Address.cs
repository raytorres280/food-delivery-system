using System;
namespace Orders.Models
{
    public class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int CustomerId { get; set; }

        public Address()
        {

        }
    }
}

