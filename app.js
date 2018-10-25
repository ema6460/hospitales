const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const robots = require('./routes/robots');

app.use('/api', robots);





module.exports = app;