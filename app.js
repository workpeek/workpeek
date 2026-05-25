const express = require('express');
const path = require('path');

const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* GLOBAL EJS VARIABLES */
app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});


// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});