mysql = require('mysql');

module.exports = {
	var con = mysql.createConnection({
	  host: "localhost",
          port: 3306,
	  user: "root",
	  password: "password",
	  database: "burgers_db"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	});

};
