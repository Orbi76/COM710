// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000; // Choose your desired port

// Database connection setup
const db = mysql.createConnection({
    host: 'localhost', // MAMP or XAMPP server address
    user: 'root', // MySQL username
    password: 'root', // MySQL password
    database: 'com710database', // Database name
    port: 8889
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        console.error('Error code: ' + err.code);
        console.error('Error fatal: ' + err.fatal);
        return;
    }
    console.log('MySQL database connected');
});

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Handle registration form submission
app.post('/registration', (req, res) => {
    const { fname, lname, gender, email, mobile, password, comment } = req.body;
    const sql = `INSERT INTO register (firstName, lastName, gender, email, mobile, password, comment) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    db.query(sql, [fname, lname, gender, email, mobile, password, comment], (err, result) => {
        // if (err) {
        //     res.status(500).send('Error occurred during registration');
        //     throw err;
        // } else {
        //     res.redirect('/?success=true');
        // }

       
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                console.error('Duplicate entry error: ', err);
                res.redirect('/registration?success=false&error=duplicate');
            } else {
                console.error(err);
                res.redirect('/registration?success=false');
            }
        } else {
            res.redirect('/registration?success=true');
        }




    });

    console.log('Received data:', req.body);
});

// Route to render the registration form
app.get('/', (req, res) => {
    const success = req.query.success === 'true';
    res.render('index');
});

app.get('/index', (req, res) => {
    const success = req.query.success === 'true';
    res.render('index');
});

app.get('/activities', (req, res) => {
    res.render('activities');
});

// app.get('/registration', (req, res) => {
//     res.render('registration');
// });


// Route to render the registration form and display success or error messages
app.get('/registration', (req, res) => {
    const success = req.query.success === 'true';
    const error = req.query.error;
    res.render('registration', { success, error });
});


app.get('/sima', (req, res) => {
    res.render('sima');
});

// Route to fetch data from the database and render the modules page
app.get('/modules', (req, res) => {
    const sql = 'SELECT * FROM modules';
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).send('Database query error');
            throw err;
        }
        res.render('modules', { modulesData: rows });
    });
});

app.get('/modulesb', (req, res) => {
    const sql = 'SELECT * FROM modules';
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).send('Database query error');
            throw err;
        }
        res.render('modulesb', { modulesData: rows });
    });
});

app.get('/modules3', (req, res) => {
    const sql = 'SELECT * FROM modules';
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).send('Database query error');
            throw err;
        }
        res.render('modulesb', { modulesData: rows });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
