const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('about', { title: 'About Page', message: 'This is the About page for the Vidly movie rental app.' });
});

module.exports = router;
