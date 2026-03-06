# Contributing to ext-tabs-api

Thank you for your interest in contributing to ext-tabs-api. This document outlines the process for contributing to this project.

## REPORTING ISSUES

When reporting issues, please include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Environment details (OS, Node version, npm version)
- Code samples that demonstrate the issue
- Any relevant screenshots or logs

Please check if the issue already exists before creating a new one.

## DEVELOPMENT WORKFLOW

1. Fork the repository
2. Clone your fork:
   ```
   git clone https://github.com/theluckystrike/ext-tabs-api.git
   ```
3. Create a feature branch:
   ```
   git checkout -b feature/your-feature-name
   ```
4. Make your changes
5. Run tests to ensure nothing is broken:
   ```
   npm test
   ```
6. Build the project:
   ```
   npm run build
   ```
7. Commit your changes with a descriptive message
8. Push to your fork:
   ```
   git push origin feature/your-feature-name
   ```
9. Submit a Pull Request

## CODE STYLE

This project follows these guidelines:

- Use TypeScript for all new code
- Follow the existing code style in the repository
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Run `npm run build` before committing to ensure code compiles

## TESTING

All new features should include tests. This project uses Jest for testing.

Run the test suite:
```
npm test
```

Run tests with coverage:
```
npm run test:coverage
```

## LICENSE

By contributing to ext-tabs-api, you agree that your contributions will be licensed under the MIT License.
