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
│   ├── ui/               # Basic UI components (buttons, inputs, etc.)
│   ├── layout/           # Layout components (header, footer, etc.)
│   ├── forms/            # Form components
│   └── sections/         # Page sections (banner, team, causes, etc.)
├── features/             # Feature-specific components and logic
│   ├── auth/            # Authentication related components
│   ├── dashboard/       # Dashboard related components
│   └── marketing/       # Marketing related components
├── modules/             # Reusable modules
│   ├── api/            # API integration modules
│   ├── auth/           # Authentication modules
│   └── utils/          # Utility modules
├── lib/                # Core libraries and utilities
│   ├── api/           # API client setup
│   ├── auth/          # Authentication utilities
│   └── utils/         # General utilities
├── services/          # Service layer
│   ├── api/          # API services
│   └── auth/         # Authentication services
├── styles/           # Global styles and Tailwind config
├── types/            # TypeScript type definitions
├── mocks/            # Mock data for development and testing
└── tests/            # Test utilities and setup
```

## 🎯 Development Workflow

### Recommended Development Order

1. **Setup and Configuration**

   - Set up environment variables
   - Configure API endpoints
   - Set up authentication

2. **Component Development**

   - Create basic UI components
   - Develop layout components
   - Build page sections
   - Create feature-specific components

3. **Page Development**

   - Implement marketing pages
   - Create dashboard pages
   - Set up authentication pages

4. **Integration**

   - Connect components to API
   - Implement authentication flow
   - Add data fetching and state management

5. **Testing and Quality**
   - Write unit tests
   - Add integration tests
   - Run quality checks
   - Fix any issues

### Using Storybook

1. **Starting Storybook**

```bash
npm run storybook
```

This will start Storybook on http://localhost:6006

2. **Component Development in Storybook**

   - Create component files in `src/components/`
   - Create story files with `.stories.tsx` extension
   - Use mock data from `src/mocks/`
   - Test different states and variations

3. **Storybook Structure**

   - **UI Components**: Basic building blocks
   - **Layout Components**: Page structure components
   - **Sections**: Page sections and features
   - **Pages**: Complete page stories

4. **Best Practices**
   - Keep components modular and reusable
   - Use mock data for testing
   - Document component props and usage
   - Test different states and variations
   - Use controls for interactive testing

### Running the Main Website

1. **Development Mode**

```bash
npm run dev
```

This will start the development server on http://localhost:3000

2. **Production Build**

```bash
npm run build
npm start
```

3. **Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Update variables as needed
   - Required variables:
     - `NEXT_PUBLIC_API_URL`
     - `NEXT_PUBLIC_STRAPI_URL`
     - `NEXT_PUBLIC_STRAPI_TOKEN`

### Branch Naming Convention

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

### Commit Message Format

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
