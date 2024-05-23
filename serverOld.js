// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000; // Choose your desired port


// Database connection setup
const db = mysql.createConnection({
    host: 'localhost', // MAMP vagy XAMPP szerver címe
    user: 'root', // MySQL felhasználónév
    password: 'root', // MySQL jelszó
    database: 'com710database', // Adatbázis neve
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
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, './public')));



// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Regisztrációs űrlap kezelése
app.post('/register', (req, res) => {
    const { fname, lname, gender, email, mobile, password, comment } = req.body;

    // MySQL lekérdezés a felhasználó hozzáadásához
    const sql = `INSERT INTO register (firstName, lastName, gender, email, mobile, password, comment) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [fname, lname, gender, email, mobile, password, comment ], (err, result) => {
        if (err) {
            res.status(500).send('Hiba történt a regisztráció során');
            throw err;
        } else{
            // res.status(200).send('Sikeres regisztráció');
        
            // res.redirect('http://127.0.0.1:5500/index.html'); // Átirányítás az index.html oldalra
            res.redirect('/?success=true');
        }
        
    });

    console.log('Kapott adatok:', req.body);

});


// Route to fetch data from the database and render the HTML page using EJS
// app.get('/', (req, res) => {
//     const sql = 'SELECT * FROM modules';
//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).send('Database query error');
//             throw err;
//         }
//         res.render('modules', { modulesData: rows });
//     });
// });


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

app.get('/register', (req, res) => {
    res.render('register');
});

// Route to fetch data from the database and render the HTML page using EJS
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

// Route to fetch data from the database and render the HTML page
// app.get('/', (req, res) => {

//     // res.sendFile(__dirname + "modules.ejs");
//     // Query to retrieve data from the database
//     const sql = 'SELECT * FROM modules';

//     // Execute the query
//     db.query(sql, function (error, results, fields) {
//         if (error) {
//             results.status(500).send('Database query error');
//             throw error;
//             res.render('modules.ejs', {data: results});
//         }
//     })
// });

// app.get('/modules', function (req,res) {

//     // Query to retrieve data from the database
//     const sql = 'SELECT * FROM modules';

//     // Execute the query
//     db.query(sql, function(error, results, fields) {
//         if (error) {
//             res.status(500).send('Database query error');
//             throw error;
//         }

//         // Render the HTML page with the retrieved data
//         // res.sendFile(path.join(__dirname, 'modules.html'), { modulesData: rows });
//         res.render('modules', { modules: results });
//     });
// });


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './public')));
// Start the server
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
