require('dotenv').config();

const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// EJS views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'bloggy',
  waitForConnections: true,
  connectionLimit: 10,
});

// Home route - show blog title & description
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT title, description FROM blogs');
    res.render('index', { blogs: rows });
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).send('Database error: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`bloggy running at http://localhost:${PORT}`);
});
