// import { copy } from "https://deno.land/std@0.117.0/streams/conversion.ts";
import { Application } from "./deps.ts";
import { DelieryRouter } from "./routers/Delivery.ts";
import { configureRabbitListener } from "./rabbitmqListener.ts"
const app = new Application();

app.use(DelieryRouter.routes());
app.use(DelieryRouter.allowedMethods());

console.log("listening on port : 8000...");
await app.listen({ port: 8000 });
await configureRabbitListener();

