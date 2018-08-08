const express = require('express')
const app = express()
const mysql = require('mysql');
const conn = require('./connection');

// GET APIs

app.get('/', (req, res) => {
	res.send('Movehack!')
});

// GET all users
app.get('/users', (req, res) => {
	var query = 'SELECT * FROM users';

	conn.query(query, (err, results, fields) => {
		if (err) throw error;
		res.send(JSON.stringify(results));
	});
});

// GET user BY id
app.get('/users/:id', (req, res) => {
	var query = 'SELECT * FROM users WHERE uid=?';

	conn.query(query, [req.params.id], (err, results, fields) => {
		if (err) throw err;
		res.send(JSON.stringify(results));
	});
});

app.listen(8000, () => {
	console.log('App listening on port 8000')
})
