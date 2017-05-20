var connection = require("../config/connection.js");


//create the methods that will execute the necessary
// MySQL commands in the controllers. 
// These are the methods you will need to use in 
// order to retrieve and store data in your database.
// selectAll();
// insertOne();
// updateOne();

var orm = {
	
	selectAll: function(all, table, cb){
		connection.query("SELECT ?? FROM ??", [all, table], function(err, result){
			if (err){
				throw err
			}
			cb(result);
		});
	},

	insertOne: function(val, cb){
		connection.query("INSERT INTO burgers (burger_name) VALUES(??)", [req.body.burger_name], function(err, res){
			if (err){
				throw err
			}
			cb(result);
		});
	},

	updateOne: function(name, id, cb){
		connection.query("UPDATE burgers SET burger_name = ??, WHERE id = ??"[
			req.body.burger_name, req.body.id], function(err, result){
				if (err){
				throw err
			}
			cb(result);
		});
	}

}

module.exports = orm;