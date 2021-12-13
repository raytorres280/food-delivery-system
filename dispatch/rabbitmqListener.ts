import { AmqpConnectOptions, connect } from "./deps.ts";

export const configureRabbitListener = async () => {
	try {
	  const opts: AmqpConnectOptions = {
		hostname: "10.102.12.80",
		port: 5672,
		username: "default_user_E13xOz5sn-xRHn0agSj",
		password: "2X-ooc7LbSp0F6NrwkF8r0RxogG9VfYG",
		// vhost: '',
		heartbeatInterval: 10,
		// frameMax: 0,
		loglevel: "debug",
	  };
	  const connection = await connect(opts);
	  const channel = await connection.openChannel();
	  const queueName = "my.queue";
	  console.log(channel)
	  await channel.declareQueue({ queue: queueName });
	  await channel.consume(
		{ queue: queueName },
		async (args, props, data) => {
		  console.log(JSON.stringify(args));
		  console.log(JSON.stringify(props));
		  console.log(new TextDecoder().decode(data));
		  await channel.ack({ deliveryTag: args.deliveryTag });
		},
	  );
	  // await channel.publish(
	  //   { routingKey: queueName },
	  //   { contentType: "application/json" },
	  //   new TextEncoder().encode(JSON.stringify({ foo: "bar" })),
	  // );
	  // await connection.close();
	} catch (error) {
	  console.log(error);
	}
  }