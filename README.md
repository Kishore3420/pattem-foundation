# Pattem Foundation

A modern Next.js application with TypeScript, Tailwind CSS, Strapi CMS integration, and comprehensive testing setup.

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Strapi
- **Testing**: Jest & React Testing Library
- **Component Development**: Storybook
- **Code Quality**: ESLint & Prettier
- **Git Hooks**: Husky & lint-staged
- **Commit Linting**: Commitlint
- **Code Analysis**: SonarQube

## 📋 Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Strapi CMS instance
- SonarQube instance

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pattem-foundation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Start Storybook:
```bash
npm run storybook
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory (pages and routes)
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── (marketing)/       # Marketing pages
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   ├── layout/           # Layout components
│   ├── forms/            # Form components
│   └── ...               # Other component types
├── features/             # Feature-specific components and logic
├── modules/             # Reusable modules
├── lib/                # Core libraries and utilities
├── services/          # Service layer
└── ...                # Other directories
```

## 🎯 Development Workflow

### 1. Branch Naming Convention

Use the following format for branch names:
```
<type>/<ticket-number>-<short-description>
```

Types:
- `feature/` - New features
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent fixes
- `release/` - Release branches
- `chore/` - Maintenance tasks

Examples:
```
feature/PAT-123-add-user-authentication
bugfix/PAT-456-fix-login-issue
hotfix/PAT-789-security-patch
```

### 2. Commit Message Format

Follow the conventional commit format:
```
<type>(<scope>): <ticket-number> <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

Examples:
```
feat(auth): PAT-123 implement user authentication
fix(api): PAT-456 resolve login timeout issue
docs(readme): PAT-789 update installation instructions
```

### 3. Adding New Features

1. Create a new branch:
```bash
git checkout -b feature/PAT-123-feature-name
```

2. Make your changes

3. Run quality checks:
```bash
npm run quality
```

4. Commit your changes:
```bash
git add .
git commit -m "feat(feature): PAT-123 add new feature"
```

5. Push your changes:
```bash
git push origin feature/PAT-123-feature-name
```

### 4. Adding New Components

1. Create component file:
```bash
touch src/components/ui/NewComponent.tsx
```

2. Create test file:
```bash
touch src/components/ui/__tests__/NewComponent.test.tsx
```

3. Create story file:
```bash
touch src/storybook/NewComponent.stories.tsx
```

4. Run component tests:
```bash
npm run test:file src/components/ui/NewComponent.test.tsx
```

## 🧪 Testing

### Running Tests

- Run all tests:
```bash
npm run test
```

- Run tests in watch mode:
```bash
npm run test:watch
```

- Run tests with coverage:
```bash
npm run test:coverage
```

- Test specific file:
```bash
npm run test:file src/components/Button.test.tsx
```

### Test Coverage Requirements

- Minimum coverage: 80%
- Minimum test success rate: 90%
- All new features must include tests
- All bug fixes must include tests

## 📝 Code Quality

### Linting

- Run linter:
```bash
npm run lint
```

- Fix linting issues:
```bash
npm run lint:fix
```

- Lint specific file:
```bash
npm run lint:file src/components/Button.tsx
```

### Formatting

- Format all files:
```bash
npm run format
```

- Check formatting:
```bash
npm run format:check
```

- Format specific file:
```bash
npm run format:file src/components/Button.tsx
```

### SonarQube Analysis

- Run analysis:
```bash
npm run sonar
```

Quality Gates:
- Code coverage: ≥ 80%
- Duplicated lines: ≤ 3%
- Code smells: ≤ 100
- Bugs: ≤ 10
- Vulnerabilities: ≤ 5
- Security hotspots: ≤ 10
- Maintainability: ≥ 80%
- Reliability: ≥ 80%
- Security: ≥ 80%

## 🔄 Git Workflow

1. **Pre-commit Checks**:
   - Linting
   - Formatting
   - Tests
   - SonarQube analysis

2. **Pre-push Checks**:
   - All pre-commit checks
   - Full test suite
   - Complete SonarQube analysis

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook
- `npm run quality` - Run all quality checks
- `npm run sonar` - Run SonarQube analysis

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

[Your License]
