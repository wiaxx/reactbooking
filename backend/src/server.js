import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

// use express package & config express
const app = express();
app.use(bodyParser.json());

// create connection to db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'reactBooking',
    multipleStatements: true,
});

// open connection to db
connection.connect((err) => {
    if (!err) {
        console.log(`Connected to reactBooking database succeeded!`)
    } else {
        console.log('Connection failed,' + JSON.stringify(err, null, 2))
    }
});

// create server connection
app.listen(8081, () => console.log(`Listen on port 8081`));

// close connection to db

// GET API all users
app.get('/api/users', (req, res) => {
    connection.query(`
    SELECT *
    FROM users;
    `, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
})

// GET API specific user
app.get('/api/users/:username', (req, res) => {
    connection.query(`SELECT * FROM users WHERE username = ?`, [req.params.username], (err, rows, fields) => {
        if (!err) {
            res.send(rows)
            // if (rows !== []) {
            //     res.send('User exist: ', rows)
            // } else {
            //     res.send('No user found!')
            // }
        } else {
            console.log(err)
        }
    })
})

// POST API for new or update user
app.post('/api/users', (req, res) => {
    let user = req.body;
    let sql = `SET @userID = ?; 
    SET @username = ?; 
    SET @firstName = ?;
    SET @lastName = ?;
    SET @email = ?; 
    SET @password = ?; 
    CALL addOrUpdateUser(@userID, @username, @firstName, @lastName, @email, @password);`;
    connection.query(sql, [user.userID, user.username, user.firstName, user.lastName, user.email, user.password], (err, rows, field) => {
        if (!err) {
            rows.forEach(row => {
                if (row.constructor == Array) {
                    if (user.userID === 0) {
                        res.send('New user ID: ' + row[0].userID);
                    } else {
                        res.send('User details updated successfully!')
                    }
                } 
            });
        } else {
            console.log("This is a error message: ", err)
        }
    })
})

// GET API all services
app.get('/api/services', (req, res) => {
    connection.query('SELECT * FROM services', (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
});

// GET API based on service type
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

// GET API all available time booking
app.get('/api/booking', (req, res) => {
    connection.query(`
    SELECT
	 b.id
	,b.date
	,b.time
	,b.customerId
    ,s.description
FROM reactBooking.bookings AS b
JOIN services AS s
	ON b.serviceId = s.id
WHERE b.customerId IS NULL;
    `, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
})