// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 8889; // Választható port szám

// Adatbázis kapcsolódás létrehozása
const db = mysql.createConnection({
    host: 'localhost', // MAMP vagy XAMPP szerver címe
    user: 'root', // MySQL felhasználónév
    password: 'root', // MySQL jelszó
    database: 'com710database' // Adatbázis neve
});

// Kapcsolat ellenőrzése
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL adatbázis kapcsolódás sikeres');
});

// Testreszabott middleware a HTTP POST kérések JSON testreszabási
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Regisztrációs űrlap kezelése
app.post('/register', (req, res) => {
    const { fname, lname, gender, email, mobile, password, comment } = req.body;

    // MySQL lekérdezés a felhasználó hozzáadásához
    const sql = `INSERT INTO register (firstName, lastName, gender, email, mobile, password, comment) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [fname, lname, gender, email, mobile, password, comment ], (err, result) => {
        if (err) {
            res.status(500).send('Hiba történt a regisztráció során');
            throw err;
        }
        res.status(200).send('Sikeres regisztráció');
    });
    console.log('Kapott adatok:', req.body);

});

// Szerver indítása a kiválasztott porton
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
