import mysql from 'mysql';

// Create connection test on localhost with the DataBase
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'rpsdata'
  });

  export default db;