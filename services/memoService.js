// services/memoService.js

const mysql = require('mysql2');

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sys',
  });
  
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

class MemoService {
  static getAll(callback) {
    connection.query('SELECT * FROM memo_content', (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        callback(error, null);
        return;
      }
      callback(null, results);
    });
  }

  static create(memoData, callback) {
    const { content, timestamp } = memoData;
    connection.query('INSERT INTO memo_content (content, timestamp) VALUES (?, ?)', [content, timestamp], (error, results) => {
      console.log(results);
      if (error) {
        console.error('Error executing MySQL query:', error);
        callback(error, null);
        return;
      }
      callback(null, { content, timestamp });
    });
  }
}

module.exports = MemoService;
