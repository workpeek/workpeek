const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Home Page'
    });
});

router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About'
    });
});

router.get('/dashboard', (req, res) => {
    res.render('pages/dashboard', {
        title: 'Dashboard'
    });
});

module.exports = router;