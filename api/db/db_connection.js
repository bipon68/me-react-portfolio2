// var mysql = require('mysql');
import mysql from 'mysql';

export const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "portfolioDb"
});

// con.connect(function(err) {
//   console.log("Connected!");

//   con.query("SELECT * FROM HR_USER", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


