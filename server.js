const express = require('express');
const path = require('path');
const api = require('./Routes/notes.js');
const PORT = process.env.PORT || 3001;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET route for the notes

app.get('/notes', (req, res) => 

res.sendFile (path.join(__dirname, '/public/notes.html'))
);

// HTML route for the Index

app.get('/', (req, res) => 

res.sendFile (path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

