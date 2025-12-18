import React, { useState } from 'react';
import './App.css';

function App() {
  const [sqlCommand, setSqlCommand] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const executeSql = async () => {
    if (!sqlCommand.trim()) {
      setError('Please enter a SQL command');
      return;
    }

    setLoading(true);
    setError('');
    setOutput('');

    try {
      const response = await fetch('http://localhost:5000/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: sqlCommand })
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(JSON.stringify(data.result, null, 2));
        setHistory([...history, { query: sqlCommand, timestamp: new Date().toLocaleTimeString() }]);
        setSqlCommand('');
        fetchTables();
      } else {
        setError(data.message || 'Error executing query');
      }
    } catch (err) {
      setError('Connection error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTables = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tables');
      const data = await response.json();
      if (response.ok) {
        setTables(data.tables);
      }
    } catch (err) {
      console.error('Error fetching tables:', err);
    }
  };

  React.useEffect(() => {
    fetchTables();
  }, []);

  const clearHistory = () => setHistory([]);
  const clearOutput = () => setOutput('');

  return (
    <div className="app-container">
      <header className="header">
        <h1>SQL Practice Lab</h1>
        <p>Learn SQL by writing real database queries</p>
      </header>

      <div className="main-content">
        <div className="editor-section">
          <h2>SQL Editor</h2>
          <textarea
            className="sql-input"
            value={sqlCommand}
            onChange={(e) => setSqlCommand(e.target.value)}
            placeholder="Enter SQL commands here...\n\nExamples:\nCREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);\nINSERT INTO users (id, name) VALUES (1, 'John');\nSELECT * FROM users;"
            spellCheck="false"
          />
          <div className="button-group">
            <button onClick={executeSql} disabled={loading} className="execute-btn">
              {loading ? 'Executing...' : 'Execute Query'}
            </button>
            <button onClick={() => setSqlCommand('')} className="clear-btn">Clear Input</button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="results-section">
          <div className="output-panel">
            <div className="panel-header">
              <h3>Query Results</h3>
              <button onClick={clearOutput} className="mini-btn">Clear</button>
            </div>
            <pre className="output-display">{output || 'Results will appear here...'}</pre>
          </div>

          <div className="info-panel">
            <div className="panel-header">
              <h3>Database Tables</h3>
              <button onClick={fetchTables} className="mini-btn">Refresh</button>
            </div>
            <div className="tables-list">
              {tables.length > 0 ? (
                tables.map((table, idx) => <div key={idx} className="table-item">{table}</div>)
              ) : (
                <p>No tables yet. Create one with CREATE TABLE command.</p>
              )}
            </div>
          </div>

          <div className="history-panel">
            <div className="panel-header">
              <h3>Query History</h3>
              <button onClick={clearHistory} className="mini-btn">Clear</button>
            </div>
            <div className="history-list">
              {history.length > 0 ? (
                history.slice(-5).reverse().map((item, idx) => (
                  <div key={idx} className="history-item">
                    <span className="time">{item.timestamp}</span>
                    <span className="query">{item.query.substring(0, 50)}...</span>
                  </div>
                ))
              ) : (
                <p>No history yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>SQL Practice Lab - Practice database concepts with real SQL execution</p>
      </footer>
    </div>
  );
}

export default App;
