var mqservice = require('../services/MQservice.js')

exports.sendMessage = (req, res) => {
    mqservice.publishToQueue('requests', 'Message from node')
    res.status(200).json({message: 'Request accepted for processing'})
}