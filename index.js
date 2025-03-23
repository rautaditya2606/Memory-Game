const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
const port = process.env.PORT || 3000;

// Set up EJS and EJS Mate
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('Simon');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
