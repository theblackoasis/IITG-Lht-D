const mysql = require('mysql');

const conn = mysql.createConnection({
	host: '172.16.115.145',
	user: 'dhananjay',
	password: 'dhananjay123',
	database: 'movehack'
});

conn.connect((err) => {
	if (err) throw err;
});

module.exports = conn;