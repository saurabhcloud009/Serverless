const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  app.use(awsServerlessExpressMiddleware.eventContext())
  app.use(bodyParser.urlencoded({
      extended: true
  }))
  app.use(bodyParser.json())
  app.get('/test', (req, res, next) => {
    const obj = {};  
    obj.output = req.query['input']
    
    res.send(obj)
})

app.post('/test', (req, res, next) => {
    console.log("payload is"+req.body);
    res.send(req.body);
})



app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
})

module.exports = app