import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

// connect to port
const app = express();
app.use(bodyParser.json());

// connect to db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'reactBooking',
    multipleStatements: true,
});

connection.connect((err) => {
    if (!err) {
        console.log(`Connected to reactBooking database succeeded!`)
    } else {
        console.log('Connection failed,' + JSON.stringify(err, null, 2))
    }
});

app.listen(8081, () => console.log(`Listen on port 8081`));

// close connection to db

app.get('/api/services', (req, res) => {
    connection.query('SELECT * FROM services', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
});

app.get('/api/services/:type', (req, res) => {
    connection.query(`SELECT 
    s.id
   ,s.service
   ,s.price
   ,s.description
   ,s.imgURL
   ,e.firstName
FROM services AS s
JOIN employees AS e
  ON s.performerId = e.Id
WHERE s.service = ? `
        , [req.params.type], (err, rows, fields) => {
            if (!err) {
                res.send(rows)
            } else {
                res.send(err)
            }
        })
})

// log in sql, check user or add user

// check available times

// check users upcoming appointments