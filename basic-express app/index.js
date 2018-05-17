console.log('basic express application');
var express = require('express');

var exphbs = require('express-handlebars');

var app = express();


console.log('basic handle bars');
app.engine('handlebars',exphbs({defaultLayout:'main'}));

app.set('view engine','handlebars');

app.get('/home', function(req,res){
	res.render('demoHomePage', {firstName:'Amir',lastName:'Khan'});
	
});


app.get('/noLayoutHome', function(req,res){
	res.render('demoHomePage', {firstName:'Amir',lastName:'Khan',layout:false});
	
});



// jade app
/*app.set('views','./views');
app.set('view engine','jade');

app.get('/',function(req,res){
	
	res.render('index');
});

app.use(express.static('./public'));

app.get('/*',function(req,res){
	
	res.writeHead(404);
	res.end('Resource does not exist');
	
});*/

var port = 3456;
app.listen(port,function(){
	console.log("Listening");
});
