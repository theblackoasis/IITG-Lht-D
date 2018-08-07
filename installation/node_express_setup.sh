#!/bin/bash

# echo "this is shell script"
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm

npm init
npm install express --save
sudo touch index.js

echo "const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('hello world!')
});

app.listen(8000, () => {
	console.log('App listening on port 8000')
})
" >> index.js

node index.js