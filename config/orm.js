var connection = require("./connection.js");

function sqlhelper(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();

}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();

}


var orm = {

    all: function(table, cb) {
        connection.query("SELECT * FROM " + table + ";", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // orm.js:56:14)
    // burger.js:11:7)
    // burger_controllers.js:23:9

    create: function(table, cols, vals, cb) {
        var query = "INSERT INTO " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += sqlhelper(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals,
            function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },

    update: function(table, objColVals, condition, cb) {
        var query = "UPDATE " + table;
        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        console.log(query);

        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}

module.exports = orm;
