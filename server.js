var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "DurhamPortland910",
    database: "****************"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./controllers/catsController.js");

//app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});