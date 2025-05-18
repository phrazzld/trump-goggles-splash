# Trump Goggles Splash Page

This is a [Next.js](https://nextjs.org) project for the Trump Goggles Chrome Extension landing page.

## ⚠️ Package Manager: PNPM Only

This project **strictly enforces pnpm** as the package manager. npm, yarn, and other package managers are not supported and will be rejected.

### Why pnpm?
- Faster installations
- Efficient disk space usage
- Strict dependency resolution
- Better monorepo support

### Enforcement Mechanisms

1. **packageManager field**: Specifies exact pnpm version in `package.json`
2. **preinstall script**: Blocks non-pnpm installations
3. **Engine requirements**: Enforces minimum pnpm version
4. **.npmrc configuration**: Contains pnpm-specific settings

If you try to use npm or yarn, you'll see an error:
```
This project requires pnpm. Please install it from https://pnpm.io
```

## Getting Started

### Prerequisites

1. **Install pnpm** (if not already installed):
   ```bash
   # Using npm
   npm install -g pnpm

   # Using corepack (recommended)
   corepack enable
   corepack prepare pnpm@latest --activate

   # Using homebrew (macOS)
   brew install pnpm
   ```

2. **Verify pnpm installation**:
   ```bash
   pnpm --version
   ```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd trump-goggles-splash

# Install dependencies with pnpm
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Commands

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Project Structure

This project uses:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **pnpm** for package management (strictly enforced)

## Contributing

When contributing to this project:

1. **Always use pnpm** for installing dependencies
2. **Never commit** `package-lock.json` or `yarn.lock` files
3. **Only commit** `pnpm-lock.yaml` for lock file changes
4. Run `pnpm install` to ensure your dependencies match the lock file

## Troubleshooting

### "This project requires pnpm" Error

If you see this error when trying to install dependencies:
1. Make sure pnpm is installed globally
2. Use `pnpm install` instead of `npm install` or `yarn install`
3. Delete any `node_modules` folder and try again with pnpm

### Wrong Lock File

If you accidentally created a `package-lock.json` or `yarn.lock`:
1. Delete the wrong lock file
2. Delete `node_modules` folder
3. Run `pnpm install` to regenerate `pnpm-lock.yaml`

## Learn More

- [pnpm Documentation](https://pnpm.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

⚠️ **Note**: When deploying, make sure to configure Vercel to use pnpm:
1. Go to Project Settings → General
2. Override the Install Command to: `pnpm install`
3. Ensure Build Command uses: `pnpm build`