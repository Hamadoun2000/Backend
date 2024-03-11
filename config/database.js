const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'project_db'
});
db.connect((err) => {
    if(err){
        console.error('Database connection error:'.err.message);
    }
    else{
        console.log('Database connected successfully');
    }
});

module.exports = db;