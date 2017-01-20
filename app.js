var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('Server Running!');});


app.listen(port, function() {
  console.log('listening to port' + port);
});


app.post('/hello'. function(req,res,next)){
  var userName = req.body.user_namel
  var botPayLoad = {
    tex:'Hello' + username + '!'
  };
}



if(userName !=='slackbot'){
  return res.status(200).json(botPayLoad);

}else {
  return res.status(200).end();
}

});
