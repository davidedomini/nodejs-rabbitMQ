# nodejs-rabbitMQ

To run RabbitMQ broker in docker container:
```bash
docker image pull rabbitmq:3-management
docker run -d --hostname rabbit-mq-node --name rabbit-mq-instance -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```