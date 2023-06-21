const express = require('express');
const router = express.Router();
const Contact = require('../models/db');

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

// Login page route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  res.render('login');
});

// Contact list page route
router.get('/contactlist', async (req, res) => {
  try {
    // Fetch the contacts from the "contacts" collection
    const contacts = await Contact.find();
    console.log('contacts', contacts);
    res.render('contactlist', { contacts: contacts.map(contact => ({
        ...contact._doc

    }))});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
