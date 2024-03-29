var express = require('express'),
	app = express(),
	port = 3000, // Local Host Port Number 
	bodyParser = require('body-parser');

//Including The Todo Routes
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res){
	res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen('https://fierce-tundra-38811.herokuapp.com/',function(){
	console.log('Node Server Has Started');
});
