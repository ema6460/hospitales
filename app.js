const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const robotRoutes = require('./routes/robots');
app.use(bodyParser.json());


robotRoutes(app);





module.exports = app;