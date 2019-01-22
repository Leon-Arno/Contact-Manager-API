const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');

const app = express();
mongoose.connect(
  'mongodb://localhost:27017/contact-manager',
  { useNewUrlParser: true, useCreateIndex: true }
);

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/contacts', contactsRouter);

module.exports = app;
