var express = require('express');
var app = express();
app.use(express.static('public'));

// Add this line at the top with other require statements
var ejs = require('ejs');

// Home page route
app.get('/', (req, res) => {
  res.render('home');
});

// About Me page route
app.get('/about', (req, res) => {
  res.render('about');
});

// Projects page route
app.get('/projects', (req, res) => {
  res.render('projects');
});

// Services page route
app.get('/services', (req, res) => {
  res.render('services');
});

// Contact page route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Add this line after the route definitions
app.set('view engine', 'ejs');

module.exports = app;
