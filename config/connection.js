var mysql = require("mysql");

var connection;

//creating JAWS for Heroku upload
if (process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
    }

    else {

    connection = mysql.createConnection({
    host: "ec2-184-73-175-95.compute-1.amazonaws.com",
    port: 5432,
    user: "hnsiwvpvvrxtle",
    password: "ae4138c1864fb9cf31155e94031065bb750774e0fe8a9d622e96ddc6645cb7a8",
    database: "df10ln5njchpki"
});
    }

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database as id " + connection.threadId);
});

module.exports = connection;