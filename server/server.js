const express = require('express');
const bodyParser = require('body-parser');
const cardRouter = require('./routes/cards');
// const userRouter = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/cards', cardRouter);
// app.use('/api/users', userRouter);

module.exports = app;