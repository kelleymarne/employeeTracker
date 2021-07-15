
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL passworrd
        password: '9414821Kw!',
        database: 'hospital_employees'
    },
    console.log('Connected to the hospital_employees database.')
);

module.exports = db;