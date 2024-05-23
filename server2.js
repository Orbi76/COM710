const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8889; // Change this to your desired port if necessary

// Database connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Default MAMP username
    password: 'root', // Default MAMP password
    database: 'com710database' // Your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('MySQL database connected');
});

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Registration form handling
app.post('/register', (req, res) => {
    const { fname, lname, gender, email, mobile, password, comment } = req.body;
    const sql = `INSERT INTO register (firstName, lastName, gender, email, mobile, password, comment) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [fname, lname, gender, email, mobile, password, comment], (err, result) => {
        if (err) {
            res.status(500).send('Error occurred during registration');
            console.error(err);
            return;
        }
        res.status(200).send('Registration successful');
    });
    console.log('Received data:', req.body);
});

// Route to fetch data from the database and render the HTML page using EJS
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM modules';
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).send('Database query error');
            console.error(err);
            return;
        }
        res.render('modules', { modulesData: rows });
    });
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


