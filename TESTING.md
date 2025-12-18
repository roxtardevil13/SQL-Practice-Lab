# Testing Guide for SQL-Practice-Lab 🧪

Comprehensive testing guide to verify the SQL-Practice-Lab application is working correctly.

## Pre-Testing Requirements

### System Requirements
- Node.js v16 or higher
- npm or yarn
- Git
- SQLite3 (optional, usually included with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Check Your Environment

```bash
node --version      # Should be v16+
npm --version       # Should be v7+
git --version       # Should be 2.0+
```

## Step 1: Repository Setup & Structure Verification ✅

### 1.1 Clone the Repository

```bash
git clone https://github.com/roxtardevil13/SQL-Practice-Lab.git
cd SQL-Practice-Lab
```

### 1.2 Verify Repository Structure

```bash
# You should see these files/folders:
ls -la

# Expected output:
# .
# ..
# .env.example
# .gitignore
# CONTRIBUTING.md
# DEPLOYMENT.md
# README.md
# TESTING.md (this file)
# package.json
```

### 1.3 Verify Git History

```bash
# Check commit history
git log --oneline

# You should see commits like:
# - docs: Add CONTRIBUTING.md
# - docs: Add comprehensive deployment guide
# - config: Add .env.example
# - chore: Add .gitignore
# - feat: Add package.json
# - docs: Add comprehensive README
```

**Status**: ✅ PASS if all files present and git history shows commits

---

## Step 2: Dependency Installation 📦

### 2.1 Install Dependencies

```bash
npm install
```

### 2.2 Monitor Installation

Watch for:
- ✅ No critical errors
- ✅ Warnings are acceptable
- ❌ Failed to install packages
- ❌ Peer dependency issues

### 2.3 Verify Installation

```bash
# Check if node_modules exists
ls node_modules | head -20

# Check package-lock.json
ls -lh package-lock.json

# Verify React installation
npm list react
```

**Status**: ✅ PASS if all packages installed successfully

---

## Step 3: Environment Configuration 🔧

### 3.1 Setup Environment File

```bash
cp .env.example .env
```

### 3.2 Verify .env Contents

```bash
cat .env

# Should contain:
# PORT=5000
# NODE_ENV=development
# DATABASE_URL=./data/practice.db
# REACT_APP_API_URL=http://localhost:5000/api
```

### 3.3 Create Data Directory

```bash
mkdir -p data
echo "Database directory created"
```

**Status**: ✅ PASS if .env file exists and is properly configured

---

## Step 4: Development Server Startup 🚀

### 4.1 Start Development Server

```bash
npm start
```

### 4.2 Expected Console Output

You should see:
```
> react-scripts start

Starting the development server...
Compiled successfully!

You can now view sql-practice-lab in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://[IP]:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### 4.3 Check for Errors

❌ Common Issues:
- Port 3000 already in use → `lsof -i :3000` and kill the process
- Module not found → Run `npm install` again
- Syntax errors → Check node version compatibility

**Status**: ✅ PASS if server starts without errors

---

## Step 5: Frontend Testing 🌐

### 5.1 Open Browser

1. Open your browser
2. Navigate to `http://localhost:3000`
3. Wait for page to load (may take 10-15 seconds on first load)

### 5.2 Verify Homepage Load

You should see:
- ✅ Page title: "SQL-Practice-Lab"
- ✅ Navigation menu
- ✅ Welcome message
- ✅ No console errors (press F12 → Console)

### 5.3 Console Check

```javascript
// Press F12 to open Developer Tools
// Go to Console tab
// You should NOT see:
❌ [ERROR]
❌ Failed to fetch
❌ 404 Not Found
```

### 5.4 Network Check

1. Open DevTools → Network tab
2. Refresh page (F5)
3. Look for:
   - ✅ All requests have status 200-304
   - ❌ No failed requests (status 404, 500)
   - ❌ No CORS errors

**Status**: ✅ PASS if frontend loads without errors

---

## Step 6: Backend Server Testing 🔌

### 6.1 In New Terminal (Keep Dev Server Running)

```bash
# In a new terminal window, in the same directory
cd server
npm install
```

### 6.2 Start Backend Server

```bash
cd server
npm start
```

### 6.3 Expected Output

```
Server running on port 5000
Database initialized successfully
API ready at http://localhost:5000/api
```

### 6.4 Test Backend Endpoints

```bash
# In another terminal, test the API

# Test 1: Health Check
curl http://localhost:5000/api/health
# Expected: {"status": "ok"}

# Test 2: Get Exercises
curl http://localhost:5000/api/exercises
# Expected: [{"id": 1, "title": "..."}, ...]

# Test 3: Execute Query
curl -X POST http://localhost:5000/api/execute \
  -H "Content-Type: application/json" \
  -d '{"query": "SELECT 1+1 as result"}'
# Expected: {"success": true, "result": [...], "error": null}
```

**Status**: ✅ PASS if all endpoints respond with 200 status

---

## Step 7: Database Connectivity Testing 🗄️

### 7.1 Verify Database Creation

```bash
# Check if database file was created
ls -lh data/practice.db
# Expected: File exists with size > 0
```

### 7.2 Test Database Write Operation

```bash
# Using the frontend, execute a test query:
# In browser console:
fetch('http://localhost:5000/api/execute', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({query: 'CREATE TABLE test (id INTEGER PRIMARY KEY, name TEXT)'})
}).then(r => r.json()).then(d => console.log(d))
```

### 7.3 Test Database Read Operation

```bash
# In browser console:
fetch('http://localhost:5000/api/execute', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({query: 'SELECT name FROM sqlite_master WHERE type="table"'})
}).then(r => r.json()).then(d => console.log(d))
```

**Status**: ✅ PASS if database operations execute successfully

---

## Step 8: Feature Testing ✨

### 8.1 SQL Editor Functionality

- [ ] Can type SQL commands in editor
- [ ] Syntax highlighting works
- [ ] Code is properly formatted
- [ ] Editor has proper line numbers

### 8.2 Query Execution

- [ ] Execute button works
- [ ] Query results display
- [ ] Errors are shown properly
- [ ] Execution time is displayed

### 8.3 Table Management

- [ ] Can view table list
- [ ] Can create new tables
- [ ] Can insert data
- [ ] Can drop tables

### 8.4 Result Visualization

- [ ] Results show in tabular format
- [ ] Can scroll through results
- [ ] Results are formatted properly
- [ ] No data is truncated

### 8.5 Mobile Responsiveness

- [ ] Test on mobile browser
- [ ] Test on tablet
- [ ] Layout adjusts properly
- [ ] Touch interactions work

**Status**: ✅ PASS if all features work as expected

---

## Step 9: Performance Testing ⚡

### 9.1 Page Load Time

```javascript
// In browser console:
console.log(performance.timing.loadEventEnd - performance.timing.navigationStart)
// Expected: < 3000ms (3 seconds)
```

### 9.2 Query Execution Speed

- [ ] Simple queries execute in < 500ms
- [ ] Complex queries execute in < 2 seconds
- [ ] No UI freezing during execution

### 9.3 Memory Usage

- [ ] Open DevTools → Memory
- [ ] Take heap snapshot
- [ ] No excessive memory growth
- [ ] No memory leaks detected

**Status**: ✅ PASS if performance metrics are acceptable

---

## Step 10: Error Handling Testing 🛡️

### 10.1 Invalid SQL Query

```sql
-- In the editor, execute:
SELECT * FORM invalid_syntax

-- Expected: Error message shown
-- Error should explain what's wrong
```

### 10.2 Non-existent Table

```sql
SELECT * FROM table_that_does_not_exist

-- Expected: Clear error message
```

### 10.3 Database Connection Loss

- [ ] Stop backend server
- [ ] Try executing a query
- [ ] Should show "Connection error"
- [ ] Restart server, should recover

**Status**: ✅ PASS if error handling works gracefully

---

## Step 11: Cross-Browser Testing 🌍

Test on different browsers:

- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Desktop)
- [ ] Edge (Desktop)
- [ ] Chrome (Mobile)
- [ ] Safari (Mobile)

For each browser:
- [ ] Page loads correctly
- [ ] All features work
- [ ] Responsive design works
- [ ] No console errors

**Status**: ✅ PASS if all browsers supported

---

## Summary Checklist

- [ ] Step 1: Repository structure verified
- [ ] Step 2: Dependencies installed
- [ ] Step 3: Environment configured
- [ ] Step 4: Development server started
- [ ] Step 5: Frontend loads correctly
- [ ] Step 6: Backend server running
- [ ] Step 7: Database connected
- [ ] Step 8: Features working
- [ ] Step 9: Performance acceptable
- [ ] Step 10: Error handling robust
- [ ] Step 11: Cross-browser compatible

## Reporting Issues

If you encounter any issues, please:

1. Document the error message
2. Include terminal output
3. Specify your OS and Node version
4. Create an issue on GitHub
5. Include steps to reproduce

## Success! 🎉

If you've passed all steps, your SQL-Practice-Lab is fully functional and ready for development or deployment!
