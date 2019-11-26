var express = require('express'),
	router = express.Router(),
	db = require('../models'); // Import Database Model and Todos Schema
var helpers = require('../helpers/todos');


router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)


router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

module.exports = router; 