// services/userService.js

const mysql = require('mysql2');

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'sys',
  });
  
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

class UserService {
  static getAll(callback) {
    connection.query('SELECT * FROM user_info', (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        callback(error, null);
        return;
      }
      callback(null, results);
    });
  }

  static create(userData, callback) {
    const { nickname, password } = userData;
    connection.query('INSERT INTO user_info (nickname, password) VALUES (?, ?)', [nickname, password], (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        callback(error, null);
        return;
      }
      callback(null, { id: results.insertId, nickname, password });
    });
  }
}

module.exports = UserService;
