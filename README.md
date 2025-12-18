# SQL-Practice-Lab 🗄️

An interactive web-based platform for practicing database and SQL concepts. Write SQL commands in real-time and see instant backend execution with a user-friendly interface optimized for desktop and mobile devices.

## ✨ Features

- **Interactive SQL Editor**: Write and execute SQL commands instantly
- **Real-time Query Execution**: See results immediately in the backend
- **Table Management**: Create, alter, and drop tables with ease
- **Query Operations**: INSERT, SELECT, UPDATE, DELETE commands
- **Syntax Highlighting**: Clean code editing experience
- **Result Visualization**: View query results in formatted tables
- **Progress Tracking**: Track your learning journey
- **Responsive UI**: Fully responsive design for desktop, tablet, and mobile
- **Practice Exercises**: Guided exercises from basic to advanced
- **Database Support**: SQLite for lightweight in-browser practice

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/roxtardevil13/SQL-Practice-Lab.git
cd SQL-Practice-Lab

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
SQL-Practice-Lab/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Editor.jsx
│   │   ├── ResultsPanel.jsx
│   │   ├── DatabaseSchemaViewer.jsx
│   │   └── ExercisePanel.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Practice.jsx
│   │   └── Exercises.jsx
│   ├── utils/
│   │   ├── sqlExecutor.js
│   │   ├── databaseManager.js
│   │   └── validators.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── index.js
├── server/
│   ├── routes/
│   │   ├── queries.js
│   │   └── exercises.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── database/
│   │   └── connection.js
│   ├── server.js
│   └── package.json
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🎯 Available Commands

### Development

```bash
# Start frontend development server
npm start

# Start backend server
cd server && npm start

# Run tests
npm test

# Build for production
npm run build
```

## 🛠️ Tech Stack

### Frontend
- **React**: UI framework
- **React Router**: Navigation
- **Axios**: HTTP client
- **Monaco Editor / CodeMirror**: SQL editor with syntax highlighting
- **Tailwind CSS**: Responsive styling
- **React Icons**: Icon library

### Backend
- **Node.js**: Runtime
- **Express.js**: Web framework
- **SQLite3**: Lightweight database
- **Cors**: Cross-origin resource sharing
- **Dotenv**: Environment configuration

### Additional Tools
- **SQL.js**: In-browser SQL execution (optional)
- **prettier**: Code formatting
- **ESLint**: Code quality

## 📚 Learning Path

### Beginner
- Creating tables
- Basic SELECT queries
- INSERT operations
- WHERE clauses

### Intermediate
- JOINs (INNER, LEFT, RIGHT)
- GROUP BY and aggregations
- Subqueries
- UPDATE and DELETE

### Advanced
- Complex JOINs
- Window functions
- Transactions
- Indexes and optimization

## 🌐 Deployment

### Deploy on Vercel (Frontend)

```bash
vercel deploy
```

### Deploy on Heroku (Backend)

```bash
heroku create sql-practice-lab
git push heroku main
```

### Deploy on Railway / Render
Follow their documentation for Express.js deployment

## 📱 Mobile Support

The application is fully responsive and works seamlessly on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Tablets (iPad, Android tablets)
- Mobile phones (iOS Safari, Chrome Mobile)

## 🔒 Security Considerations

- Input validation on both frontend and backend
- SQL injection prevention using parameterized queries
- CORS configuration for API security
- Rate limiting on API endpoints
- Environment variables for sensitive data

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in your environment
PORT=3001 npm start
```

### Database Connection Issues
- Check database file permissions
- Verify SQLite3 is properly installed
- Check server console for connection logs

### Syntax Highlighting Not Working
- Clear browser cache
- Reinstall dependencies: `npm install`
- Check Monaco Editor/CodeMirror configuration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by popular SQL practice platforms
- Built with ❤️ for database enthusiasts
- Special thanks to the open-source community

## 📧 Contact & Support

For questions, suggestions, or bug reports:
- Open an issue on GitHub
- Check existing issues for solutions
- Feel free to reach out for collaboration

## 🎓 Learning Resources

- [SQL Tutorial - W3Schools](https://www.w3schools.com/sql/)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [Database Design Fundamentals](https://www.udemy.com/course/database-design-fundamentals/)

---

**Happy Learning! Master SQL and Database Concepts with SQL-Practice-Lab** 🚀
