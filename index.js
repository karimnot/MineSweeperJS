const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.set('json spaces', 4);

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json


consign()
	.include('api')
	.into(app);

app.listen(PORT, () => console.log(`MineSweeper API - Port ${PORT}`));

