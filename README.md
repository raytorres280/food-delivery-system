# Kubernetes, RabbitMQ, Deno, .NET Core

Microservice project. Orders are created on one service, then dispatched to be delivered.

The only communication between the two services is via RabbitMQ message queues and GRPC.