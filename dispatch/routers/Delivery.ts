import { Route, Router, RouterContext, Application, BodyJson } from "../deps.ts";
import { Delivery } from "../models/Delivery.ts"
import { Order } from "../models/Order.ts"

const deliveries: Delivery[] = [
	{
		id: 2980,
		customerId: 123,
		addressId: 498,
		platformId: 18, //grubhub, doordash, uber eats
		status: 'processing', //processing, pending pickup, in transit, completed
		orderId: 4
	}
]

const DelieryRouter = new Router();
DelieryRouter
	.get('/getStatus/:id', ({ request, response, params }) => {
		// const reqBody = await request.body() as BodyJson;
		// const delivery = await reqBody.value as Delivery
		// console.log(delivery)
		console.log('hello from get status')
		response.body = deliveries.find(d => d.id === Number(params?.id));
		response.status = 200;
		// response.body = "hello world"
	})
	// .get('/getOrder', (_ctx) => {

	// })
	// takes in an order, and creates a delivery for it
	.post('/dispatchOrder', async ({ request, response }) => {
		// deliver
		const order: Order = await request.body().value;
		console.log(order)
		let newDelivery = new Delivery(order.customerId, order.addressId, order.orderId);
		console.log(newDelivery)
		deliveries.push(newDelivery);
		response.body = newDelivery;
	});

export {DelieryRouter};