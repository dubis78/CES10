const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'b0dmwx70pwqnf4phloab-mysql.services.clever-cloud.com',
  user: 'uek7k4rpjtdfnbk2',
  password: 'bcHwT5QwKqBC57itwVHU',
  database: 'b0dmwx70pwqnf4phloab',
  multipleStatements: true

    // host:'bz6uvndcnhfr7mavr9f2-mysql.services.clever-cloud.com',
  // user:'ueeuwupkuykeozg6',
  // password:'xOSqBorgS9GXqXcO0gdp',
  // database:'bz6uvndcnhfr7mavr9f2',
  // multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;