const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Home Page',
        currentPath: req.path
    });
});

router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About',
        currentPath: req.path
    });
});

router.get('/dashboard', (req, res) => {
    res.render('pages/dashboard', {
        title: 'Dashboard',
        currentPath: req.path
    });
});

module.exports = router;