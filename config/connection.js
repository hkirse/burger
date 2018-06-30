var mysql = require("mysql");

var connection;


    connection = mysql.createConnection({
    host: "ec2-184-73-175-95.compute-1.amazonaws.com",
    port: 5432,
    user: "hnsiwvpvvrxtle",
    password: "ae4138c1864fb9cf31155e94031065bb750774e0fe8a9d622e96ddc6645cb7a8",
    database: "df10ln5njchpki"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database as id " + connection.threadId);
});

module.exports = connection;