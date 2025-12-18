const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database('./sql_practice.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('SQLite database connected');
    db.run('PRAGMA foreign_keys = ON');
  }
});

// Routes

// Execute SQL Query
app.post('/api/execute', (req, res) => {
  const { query } = req.body;

  if (!query || !query.trim()) {
    return res.status(400).json({ message: 'Query is required' });
  }

  try {
    const upperQuery = query.trim().toUpperCase();

    // Handle SELECT queries
    if (upperQuery.startsWith('SELECT')) {
      db.all(query, [], (err, rows) => {
        if (err) {
          console.error('SQL Error:', err);
          return res.status(400).json({ message: err.message });
        }
        res.json({ result: rows || [] });
      });
    }
    // Handle CREATE TABLE queries
    else if (upperQuery.startsWith('CREATE TABLE')) {
      db.run(query, (err) => {
        if (err) {
          console.error('SQL Error:', err);
          return res.status(400).json({ message: err.message });
        }
        res.json({ result: 'Table created successfully' });
      });
    }
    // Handle INSERT queries
    else if (upperQuery.startsWith('INSERT')) {
      db.run(query, (err) => {
        if (err) {
          console.error('SQL Error:', err);
          return res.status(400).json({ message: err.message });
        }
        res.json({ result: 'Data inserted successfully' });
      });
    }
    // Handle UPDATE queries
    else if (upperQuery.startsWith('UPDATE')) {
      db.run(query, (err) => {
        if (err) {
          console.error('SQL Error:', err);
          return res.status(400).json({ message: err.message });
        }
        res.json({ result: 'Data updated successfully' });
      });
    }
    // Handle DELETE queries
    else if (upperQuery.startsWith('DELETE')) {
      db.run(query, (err) => {
        if (err) {
          console.error('SQL Error:', err);
          return res.status(400).json({ message: err.message });
        }
        res.json({ result: 'Data deleted successfully' });
      });
    }
    // Handle DROP TABLE queries
    else if (upperQuery.startsWith('DROP')) {
      db.run(query, (err) => {
        if (err) {
          console.error('SQL Error:', err);
          return res.status(400).json({ message: err.message });
        }
        res.json({ result: 'Table dropped successfully' });
      });
    }
    else {
      res.status(400).json({ message: 'Unsupported SQL command. Supported: SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, DROP TABLE' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// Get all tables
app.get('/api/tables', (req, res) => {
  const query = "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'";
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('SQL Error:', err);
      return res.status(400).json({ message: err.message });
    }
    const tables = rows.map(row => row.name);
    res.json({ tables });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`SQL Practice Lab server running on http://localhost:${PORT}`);
  console.log('API available at http://localhost:' + PORT + '/api');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Closing database connection...');
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Database connection closed.');
    process.exit(0);
  });
});
