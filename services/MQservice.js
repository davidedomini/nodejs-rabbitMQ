var amqp = require('amqplib/callback_api');

let ch = null
const CONN_URL = 'amqp://guest:guest@localhost:5672/'

exports.connectToChannel = () => {
    amqp.connect(CONN_URL, function (err, conn) {
        console.log("[Backend] Connected to RabbitMQ")
        conn.createChannel(function (err, channel) {
            console.log("[Backend] Channel created")
            ch = channel
        })
    })
}

exports.publishToQueue = (queueName, data) => {
    console.log("[Backend] Sending message")
    ch.sendToQueue(queueName, new Buffer.from(data))
} 