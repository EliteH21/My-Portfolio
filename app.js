const express = require('express');
const app = express();
const path = require('path');

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// Server listening
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
