using System;
using RabbitMQ.Client;
namespace Ordering.Services
{
	public class RabbitMqService
	{
		ConnectionFactory factory = new ConnectionFactory();
		//RabbitMQ instance = null;

		public RabbitMqService(string user, string pass, int port, string hostName = "localhost", string vhost = "/")
		{
			this.factory.UserName = user;
			this.factory.Password = pass;
			this.factory.Port = port;
			this.factory.HostName = hostName;
			this.factory.VirtualHost = vhost;
		}

		public void PublishMessage(string message)
		{
			try
			{
				IConnection conn = factory.CreateConnection();
				var channel = conn.CreateModel();
				//channel.ExchangeDeclare("", ExchangeType.Direct);
				string queueName = channel.QueueDeclare("my.queue", false, false, false, null).QueueName;
				//channel.QueueBind(queueName, "", "my.queue", null);

				byte[] messageBodyBytes = System.Text.Encoding.UTF8.GetBytes(message);
				System.Console.WriteLine("successfully connected to rabbitmq");
				System.Console.WriteLine("sending message");
				channel.BasicPublish("", "my.queue", null, messageBodyBytes);
				conn.Close();
			}
			catch (Exception err)
			{
				System.Console.WriteLine("error with rabbitmq: " + err.Message);
			}
		}
	}
}
