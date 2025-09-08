# ADMSC Client Dashboard

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
admsc-client-dashboarq/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── dashboard/       # Dashboard page
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
├── amplify.yml            # AWS Amplify config
└── Configuration files...
```

## 🛠 Development Tools

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **ESLint** - Code linting with Airbnb config
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Run linters on staged files

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript checks

## 🔧 Configuration

### ESLint Configuration

Extends Airbnb config with Next.js optimizations:

- TypeScript support
- React hooks rules
- Import/export rules
- Prettier integration

### Husky Pre-commit Hooks

1. Prettier formatting on staged files
2. ESLint fixes on staged files
3. TypeScript type checking
4. Blocks commits if any check fails

### AWS Amplify

Optimized build configuration:

- pnpm package manager
- Build artifact caching
- Next.js static export

## 📦 Deployment

### AWS Amplify

1. Connect your repository to Amplify
2. Use the included `amplify.yml` configuration
3. Set build settings to use pnpm
4. Configure environment variables if needed

### Manual Deployment

```bash
# Build the application
pnpm build

# The static files will be in .next/ directory
# Upload to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the quality checks: `pnpm lint && pnpm type-check`
5. Commit your changes (pre-commit hooks will run automatically)
6. Push to your branch and create a Pull Request

## 📄 License

This project is private and proprietary.

---

**ADMSC Client Dashboard** - Built with Next.js, TypeScript, and modern development practices.
