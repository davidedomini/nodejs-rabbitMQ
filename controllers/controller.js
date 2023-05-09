var mqservice = require('../services/MQservice.js')

exports.sendMessage = (req, res) => {
    let message = `
    {   
        "id": 1,
        "theory": "find([E | _], E).\nfind([_ | T], E) :- find(T, E).",
        "goal": "find([10, 20, 30], S).",
        "timeout": 20, 
        "maxSol": 5,
        "type": "NEXT"
    }
    `
    mqservice.publishToQueue('requests', message)
    res.status(200).json({message: 'Request accepted for processing'})
}

exports.sendReset = (req, res) => {
    let message = `
    {   
        "id": 1,
        "theory": "",
        "goal": "",
        "timeout": -1, 
        "maxSol": -1,
        "type": "RESET"
    }
    `
    mqservice.publishToQueue('requests', message)
    res.status(200).json({message: 'Request accepted for processing'})
}
