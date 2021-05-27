/* import mysql from "mysql";

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'form'
});

connection.connect(); */

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'password',
  database        : 'form'
});
 

export default function answers(req, res) {
  pool.query('INSERT INTO forms (fullName, email, q1, q2, q3, q4, q5, q6) VALUES(?,?,?,?,?,?,?,?)',
  [req.body.name, req.body.email, req.body.q1, req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6],

  function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results[0].solution);
  });
  res.json({hello: req.body.name, hola: req.body.email, method: req.method})
  //<p>Se registro tu respuesta</p>
      /* connection.query('INSERT INTO forms name = ?, email = ?, q1 = ?, q2 = ?, q3 = ?, q4 = ?, q5 = ?, q6 = ?',
    [req.body.name, req.body.email, req.body.q1, req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6], 
    
    function (error, results, fields) {
        if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        console.log(results.insertId);
        console.log('connected as id ' + connection.threadId);
    }); */
    /* connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
      
    console.log('connected as id ' + connection.threadId);
    }); */
}