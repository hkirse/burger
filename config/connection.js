var mysql = require("mysql");

var connection;

//creating JAWS for Heroku upload
if (process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
    }

    else {

    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "DurhamPortland910",
    database: "burgers_db"
});
    }

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database as id " + connection.threadId);
});

module.exports = connection;