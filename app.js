var express=require('express');
var app=express();

var routes=require('./routes/route.js');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));


app.get('/',routes.home);
app.get('/skills',routes.skills);
app.get('/contactMe',routes.contactMe);


app.use(function(req, res) {
      res.status(400);
     res.render('404');
  });

var port = process.env.PORT || 8080;

//var port = process.env.PORT || 7000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});