let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let router = require('../routes/index');
const mongoose = require('mongoose');
const Contact = require('../models/db');

let app = express();
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
 mongoose.connect('mongodb+srv://ivan:ivanpassword@comp229cluster.5wsntz4.mongodb.net/contacts_book?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
}); 

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/resume', express.static(__dirname + '/../public/resume'));
app.use('/img', express.static(__dirname + '/../public/img'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', router);
app.use('/contactlist', router); // Add this line to register the /contatlist route

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;
