var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb+srv://Admin:1EXbwARgdpOb72ti@min-system-api-4jry3.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology :true,useFindAndModify:false});
mongoose.Promise = Promise;


module.exports.Todo = require("./todo");
