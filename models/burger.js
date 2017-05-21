var orm = require("../config/orm.js");
//create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
	all: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		});
	},
	create: function(col, val, cb){
		orm.create("burgers", col, val, function(res){
			cb(res);
		});
	},
	update: function(colname, id, cb){
		orm.update("burgers", colname, id, function(res){
			cb(res);
		});
	}
};


module.exports = burger;