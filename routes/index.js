// Importing the Express library
const express = require('express');

// Creating an instance of a router
const router = express.Router();

/* GET Home page */
// Route to render the Home page using 'home.ejs' view template
router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

/* GET About page */
// Route to render the About Me page using 'about.ejs' view template
router.get('/about', (req, res) => {
    res.render('about', { title: 'My Fitness Journey' });
});

/* GET Skills page */
// Route to render the Skills page using 'skills.ejs' view template
router.get('/skills', (req, res) => {
    res.render('skills', { title: 'Skills' });
});

/* GET Contact page */
// Route to render the Contact page using 'contact.ejs' view template
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Exporting the router module
module.exports = router;