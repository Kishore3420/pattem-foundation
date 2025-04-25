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

## 🏗️ Component Architecture

We follow Atomic Design principles for organizing our components:

### Atoms (Basic Building Blocks)

Located in `src/components/atoms/`:

- **Typography**: Text components with various styles and variants
  - Typography: Base text component
  - Blockquote: Styled blockquote component
  - ContextualText: Specialized text components (Highlighted, Price, Legal, Divider)
  - DefinitionList: Structured definition lists
  - InteractiveText: Interactive text components (Link, CopyableText, TextWithIcon)
  - List: Ordered and unordered lists
  - TextModifiers: Text styling modifiers
- **Button**: Reusable button components with variants
- **Icons**: Basic icon components and sets
- **Media**: Basic media components (images, videos, audio)

### Molecules (Component Combinations)

Located in `src/components/molecules/`:

- **Forms**: Form-related components combining atoms
  - Form groups
  - Input groups
  - Form sections
- **Data Display**: Data presentation components
  - Data cards
  - Statistics displays
  - Info boxes
- **Feedback**: User feedback components
  - Alerts
  - Notifications
  - Progress indicators

### Organisms (Complex Components)

Located in `src/components/organisms/`:

- **Tables**: Complex table components
  - Data tables
  - Sortable tables
  - Paginated tables
- **Carousels**: Slideshow components
  - Image carousels
  - Content carousels
  - Testimonial carousels
- **Charts**: Data visualization components
  - Line charts
  - Bar charts
  - Pie charts
- **Modals**: Dialog components
  - Dialog modals
  - Form modals
  - Confirmation modals

### Templates (Page Layouts)

Located in `src/components/templates/`:

- **Layout**: Page layout components
  - Header
  - Footer
  - Navigation
- **Sections**: Page section templates
  - Banner sections
  - Cause sections
  - Team sections
  - Impact sections
- **Overlays**: Overlay templates
  - Modal overlays
  - Loading overlays
  - Notification overlays

### Pages (Complete Pages)

Located in `src/app/`:

- Marketing pages
- Dashboard pages
- Authentication pages

## 💻 Developer Setup

### Required Tools

#### For Mac Users

1. **Node.js & npm**

   - Install using [Homebrew](https://brew.sh/):
     ```bash
     brew install node
     ```
   - Or download from [Node.js website](https://nodejs.org/)

2. **Git**

   - Install using Homebrew:
     ```bash
     brew install git
     ```
   - Or download from [Git website](https://git-scm.com/)

3. **VS Code** (Recommended IDE)

   - Download from [VS Code website](https://code.visualstudio.com/)
   - Recommended Extensions:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense
     - TypeScript and JavaScript Language Features
     - GitLens
     - Jest Runner

4. **Docker** (Optional, for Strapi)
   - Install using Homebrew:
     ```bash
     brew install --cask docker
     ```

#### For Windows Users

1. **Node.js & npm**

   - Download from [Node.js website](https://nodejs.org/)
   - Or use [Chocolatey](https://chocolatey.org/):
     ```bash
     choco install nodejs
     ```

2. **Git**

   - Download from [Git website](https://git-scm.com/)
   - Or use Chocolatey:
     ```bash
     choco install git
     ```

3. **VS Code** (Recommended IDE)

   - Download from [VS Code website](https://code.visualstudio.com/)
   - Same recommended extensions as Mac

4. **Docker** (Optional, for Strapi)
   - Download from [Docker website](https://www.docker.com/products/docker-desktop)

### Alternative Tools

1. **IDE Alternatives**

   - WebStorm (Paid)
   - Sublime Text
   - Atom

2. **Package Managers**

   - Yarn
   - pnpm

3. **Version Control**
   - GitHub Desktop
   - GitKraken
   - SourceTree

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
├── app/                      # Next.js app directory (pages and routes)
│   ├── (auth)/              # Authentication routes
│   ├── (dashboard)/         # Dashboard routes
│   ├── (marketing)/         # Marketing pages
│   └── api/                 # API routes
├── components/              # Reusable components (Atomic Design)
│   ├── atoms/              # Basic building blocks
│   │   ├── typography/     # Text components
│   │   ├── Button/        # Button components
│   │   ├── icons/         # Icon components
│   │   └── media/         # Media components
│   ├── molecules/         # Combinations of atoms
│   │   ├── forms/        # Form-related components
│   │   ├── data-display/ # Data presentation components
│   │   └── feedback/     # User feedback components
│   ├── organisms/        # Complex components
│   │   ├── tables/      # Table components
│   │   ├── carousels/   # Carousel components
│   │   ├── charts/      # Chart components
│   │   └── modals/      # Modal components
│   └── templates/        # Page templates
│       ├── layout/      # Layout components
│       ├── sections/    # Page sections
│       └── overlays/    # Overlay components
├── lib/                 # Core libraries and utilities
│   ├── api/            # API client setup
│   ├── auth/           # Authentication utilities
│   └── utils/          # General utilities
├── services/           # Service layer
│   ├── api/           # API services
│   └── strapi/        # Strapi CMS integration
├── styles/            # Global styles and Tailwind config
├── types/             # TypeScript type definitions
└── tests/             # Test utilities and setup
```

## 🎯 Development Workflow

### Code Quality Tools

1. **ESLint & Prettier**

   - Automatic formatting on save (VS Code)
   - Pre-commit hooks for formatting
   - Consistent code style across the project

2. **Husky & lint-staged**

   - Pre-commit hooks for:
     - Code formatting
     - Linting
     - Running tests
   - Pre-push hooks for:
     - Quality checks
     - Test coverage

3. **Commitlint**

   - Enforces conventional commit messages
   - Format: `<type>(<scope>): <description>`
   - Types: feat, fix, docs, style, refactor, test, chore

4. **SonarQube**
   - Code quality analysis
   - Security scanning
   - Code coverage reporting

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

- `feature/PF-123-add-donation-form`
- `bugfix/PF-456-fix-login-error`
- `hotfix/PF-789-security-patch`

## 🧪 Testing

### Running Tests

1. **All Tests**

```bash
npm test
```

2. **Watch Mode**

```bash
npm run test:watch
```

3. **Coverage Report**

```bash
npm run test:coverage
```

### Test Structure

- Unit tests: `*.test.tsx`
- Component tests: `*.test.tsx`
- Integration tests: `*.test.tsx`
- E2E tests: `*.test.tsx`

## 📊 Quality Metrics

### Test Coverage

We maintain 100% test coverage across all components:

```
-------------------------------|---------|----------|---------|---------|
File                           | % Stmts | % Branch | % Funcs | % Lines |
-------------------------------|---------|----------|---------|---------|
All files                      |     100 |      100 |     100 |     100 |
```

### Component Testing Strategy

1. **Atoms**

   - Unit tests for all variants and props
   - Accessibility testing
   - Style and className testing
   - Event handler testing

2. **Molecules**

   - Integration tests for atom combinations
   - State management testing
   - User interaction testing
   - Error handling testing

3. **Organisms**

   - Complex integration testing
   - Data flow testing
   - Performance testing
   - Edge case handling

4. **Templates**

   - Layout testing
   - Responsive design testing
   - Component composition testing
   - Section arrangement testing

5. **Pages**
   - End-to-end testing
   - Route testing
   - Data fetching testing
   - SEO testing

### Quality Checks

Run the following command to check code quality:

```bash
npm run quality
```

This will:

1. Run ESLint for code style
2. Execute all tests with coverage reporting
3. Check formatting with Prettier

## 📝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
