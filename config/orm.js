var connection = require("../config/connection.js");
//create the methods that will execute the necessary
// MySQL commands in the controllers. 
// These are the methods you will need to use in 
// order to retrieve and store data in your database.
// selectAll();
// insertOne();
// updateOne();
function sqlhelper(num){
	var arr = [];

	for (var i = 0; i < num; i++){
		arr.push("?");
	}

	return arr.toString();

}

function objToSql (ob){
	var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();

}


var orm = {
	
	all: function(table, cb){
		connection.query("SELECT * FROM", + table + ";", function(err, result){
			if (err){
				throw err
			}
			cb(result);
		});
	},

	create: function(table, col, value, cb){
		var query = "INSERT INTO"  + table;
		query += " (";
		query += col.toString();
		query += ") ";
		query += "VALUES (";
		query += sqlhelper(value.length);
		query += ") ";

		//console.log(query);

		connection.query(query, val,
			function(err, result){
			if (err){
				throw err
			}
			cb(result);
		});
	},

	update: function(table, col, id, cb){
		var query = "UPDATE"  + table;
		query += " SET ";
		query += objToSql(col);
		query += "WHERE ";
		query += id;

		console.log(query);

		connection.query(query, function(err, result){
				if (err){
				throw err
			}
			cb(result);
		});
	}

}

module.exports = orm;