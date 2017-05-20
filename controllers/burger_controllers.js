var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();
//Create the router for the app, and export the router at
//the end of your file.

router.get("/", function(req, res){
	burger.selectAll(function(data){
		var obj = {burgers: data};
	
		console.log(obj);
		res.render("index", obj);
	});
});

router.post("/", function(req, res){
	burger.insertOne([req.body.burger_name, req.body.devoured],
		function(){
		res.redirect("/")
	});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;
	console.log(condition);
	burger.updateOne(function(){
		res.redirect("/");
	});
});


module.exports = router;