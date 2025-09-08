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

## 🔍 SEO Management Best Practices

### 1. Semantic HTML Structure

```tsx
<header>
  <nav>{/* Navigation */}</nav>
</header>
<main>
  <article>
    <section>{/* Content sections */}</section>
  </article>
</main>
<footer>{/* Footer content */}</footer>
```

### 2. Metadata API Implementation

```tsx
// In layout.tsx or page.tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    url: 'https://your-domain.com',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
  },
};
```

### 3. Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority // For above-the-fold images
/>;
```

### 4. Canonical URLs

```tsx
// In metadata
alternates: {
  canonical: 'https://your-domain.com/page',
}
```

### 5. Robots.txt & Sitemap

- `public/robots.txt` - Configure web crawler access
- Use `next-sitemap` for dynamic sitemap generation

### 6. Performance Optimization

- Use Static Site Generation (SSG) where possible
- Implement Incremental Static Regeneration (ISR) for dynamic content
- Optimize Core Web Vitals

## 🚀 CI/CD Pipeline

### GitHub Actions Workflow

The CI/CD pipeline runs on every push and pull request:

1. **Quality Checks**
   - Prettier formatting check
   - ESLint linting
   - TypeScript type checking
   - Production build verification

2. **Preview Deployments**
   - Automatic preview deployments on pull requests
   - Environment isolation for testing

3. **Production Deployment**
   - Automatic deployment to production on main branch
   - Deployment artifacts caching

### Customization Instructions

#### 1. Add Amplify Deployment Steps

Update `.github/workflows/ci.yml`:

```yaml
deploy-production:
  runs-on: ubuntu-latest
  needs: quality-checks
  if: github.ref == 'refs/heads/main'

  steps:
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1

    - name: Deploy to Amplify
      run: |
        aws amplify start-job --app-id ${{ secrets.AMPLIFY_APP_ID }} --branch-name main --job-type RELEASE
```

#### 2. Enhanced Caching

Add pnpm store caching:

```yaml
- name: Cache pnpm store
  uses: actions/cache@v3
  with:
    path: ~/.pnpm-store
    key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-pnpm-
```

#### 3. Preview Builds

Configure preview deployments:

```yaml
deploy-preview:
  if: github.event_name == 'pull_request'
  steps:
    - name: Deploy Preview
      run: |
        # Deploy to preview environment
        aws amplify start-job --app-id ${{ secrets.AMPLIFY_PREVIEW_APP_ID }} --branch-name ${{ github.head_ref }} --job-type RELEASE
```

#### 4. Branch Protection

Restrict production deployments:

```yaml
deploy-production:
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
```

#### 5. Environment Variables

Add required secrets in GitHub repository settings:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AMPLIFY_APP_ID`
- `AMPLIFY_PREVIEW_APP_ID`

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
