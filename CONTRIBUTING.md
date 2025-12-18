# Contributing to SQL-Practice-Lab 🤝

Thank you for your interest in contributing to SQL-Practice-Lab! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and helpful to all contributors and users.

## Getting Started

### Prerequisites
- Node.js >= 16
- npm or yarn
- Git

### Local Setup

```bash
# Clone the repository
git clone https://github.com/roxtardevil13/SQL-Practice-Lab.git
cd SQL-Practice-Lab

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start development
npm run dev
```

## Project Structure

```
.
├── public/                 # Static files
├── src/                    # Frontend (React)
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── styles/
├── server/                 # Backend (Express)
│   ├── routes/
│   ├── middleware/
│   └── database/
└── docs/                   # Documentation
```

## Making Changes

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b bugfix/your-bug-description
```

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Test your changes locally

### 3. Commit Your Changes

Use meaningful commit messages:

```bash
# Format: type(scope): subject
git commit -m "feat(editor): add syntax highlighting support"
git commit -m "fix(database): resolve connection timeout issue"
git commit -m "docs(readme): update installation instructions"
```

Commit types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Build, dependencies, etc.

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear description of changes
- Reference to related issues (if any)
- Screenshots/demos (if UI changes)

## Testing

```bash
# Run tests
npm test

# Check code quality
npm run lint
```

## Documentation

- Update README.md for user-facing changes
- Update DEPLOYMENT.md for deployment changes
- Add inline comments for complex code
- Keep documentation updated with code

## Reporting Issues

When reporting bugs:

1. Use a clear, descriptive title
2. Describe the exact steps to reproduce
3. Explain expected vs. actual behavior
4. Include screenshots/error messages
5. Specify your OS, browser, Node version

## Feature Requests

1. Check if feature already exists
2. Describe the use case
3. Provide examples if possible
4. Explain the expected behavior

## Pull Request Process

1. Ensure tests pass locally
2. Update documentation
3. Follow commit message conventions
4. Keep PR focused on single feature/fix
5. Respond to review comments
6. Maintain a clean commit history

## Questions?

Feel free to:
- Open an issue for questions
- Check existing issues and discussions
- Review documentation

## License

By contributing, you agree your code will be licensed under the MIT License.

Thank you for making SQL-Practice-Lab better! ❤️
