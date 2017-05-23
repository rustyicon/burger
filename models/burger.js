var orm = require("../config/orm.js");
//create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
	all: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(cols, vals, cb){
		orm.update("burgers", cols, vals, function(res){
			cb(res);
		});
	}
};


module.exports = burger;