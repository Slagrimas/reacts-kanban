const express = require('express');
const bodyParser = require('body-parser');
 const app = express();
 app.use(bodyParser.urlencoded({ extended: true }));
 app.get('/api/smoke', (req, res) => {
    res.json({message: 'smoke test'});
 });
 module.exports = app;