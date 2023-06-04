
// Ivan Prikhodko 301261209 COMP229_402

const express = require('express');
const app = express();
const router = express.Router();


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set up static file serving
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/resume', express.static(__dirname + 'public/resume'));
app.use('/img', express.static(__dirname + 'public/img'));

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


  // Mount the router on the app
app.use('/', router);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

