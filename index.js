const express = require('express')
const app = express()
const routes = require('./routes/routes.js')
const mqservice = require('./services/MQservice.js')
routes(app)


app.listen(3000, function(){
  console.log('Listening on port 3000!')
  mqservice.connectToChannel()
});