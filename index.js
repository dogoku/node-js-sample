var express = require('express')
var app = express()
var cors = require('cors')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello kokos!')
})

var corsOpts = {
  origin: true,
  credentials: true,
  preflightContinue: true
};

app.options('/preflight', cors(corsOpts));
app.get('/preflight', cors(corsOpts), function(req, res) {
  res.json({
    text: 'Complex CORS requests are working.'
  });
})

app.get('/all', cors(), function (req, res) {
  res.json({
    text: 'Simple CORS requests are working.'
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
