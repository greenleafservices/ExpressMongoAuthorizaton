var express = require('express');
var router = express.Router();

// GET /
router.get('/register', function(req, res, next) {
  return res.render('register', { title: 'Sign Up' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

// GET /register
router.get('/register', function(req, res, next) {
  return res.send('Register today!');
});

// POST /register
router.post('/register', function(req, res, next) {
  return res.send('User created!');
})

module.exports = router;
