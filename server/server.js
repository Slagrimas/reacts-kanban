const express = require('express');
const bodyParser = require('body-parser');
const cardRouter = require('./routes/cards');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/cards', cardRouter);

module.exports = app;