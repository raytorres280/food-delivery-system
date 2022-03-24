using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Orders.Models;
using Ordering.Services;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Orders.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class OrderController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("{orderId:int}")]
        public Order GetOrder(int orderId)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("missing order id");
            }
            return new Order();
        }

        [HttpPost("")]
        public Order CreateOrder(Order order)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("missing required parameter");
            }
            //var order = new Order();
            var client = new RabbitMqService("default_user_E13xOz5sn-xRHn0agSj", "2X-ooc7LbSp0F6NrwkF8r0RxogG9VfYG", 5672, "10.102.12.80");
            var msg = $"hello from order number {order.Id}";
            client.PublishMessage(msg);
            return order;

        }
    }
}

