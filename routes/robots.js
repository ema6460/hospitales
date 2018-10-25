const express = require('express');
const api = express.Router();
const robotsCtrl = require('../controllers/robots');

api.get('/robots', robotsCtrl.index);


api.post('/robots', robotsCtrl.store);


module.exports = api;