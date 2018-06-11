var connection = require("./connection.js"); // "../config/connection.js"

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }


//convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


var orm = {
// selectAll()
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log("printed all");
        });
    },
// insertOne() to create new burger in db
    insertOne: function(table, column, values, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
        console.log(queryString);
        console.log(values);

        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log("inserted");
        });
    },
// updateOne() to change devoured status to true
    updateOne: function(table, colObj, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(colObj);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        console.log(colObj);
  
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
            connection.query("SELECT * FROM burgers", function(err, result) {
                if(err) {
                    throw err;
                }
                console.log(result);
            });
        });

    }

};
// Export the ORM object in module.exports.
module.exports = orm;