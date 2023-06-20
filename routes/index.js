// Ivan Prikhodko 301261209 COMP229_402

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('home');
});

// About Me page route
router.get('/about', (req, res) => {
    res.render('about');
});

// Projects page route
router.get('/projects', (req, res) => {
    res.render('projects');
});

// Services page route
router.get('/services', (req, res) => {
    res.render('services');
});

// Contact page route
router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;
