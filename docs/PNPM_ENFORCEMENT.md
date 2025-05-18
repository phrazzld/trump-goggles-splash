# PNPM Enforcement Documentation

This project strictly enforces the use of pnpm as the package manager. This document details all enforcement mechanisms in place.

## Enforcement Layers

### 1. Package.json Configuration

- **`packageManager`**: Specifies exact pnpm version (10.10.0)
- **`engines`**: Requires pnpm >= 10.0.0 and node >= 20.0.0
- **`preinstall`**: Script that runs `only-allow pnpm` to block other package managers

### 2. .npmrc Configuration

Contains pnpm-specific settings:
- `engine-strict=true`: Enforces engine requirements
- `only-allow-pnpm=true`: Additional pnpm enforcement
- Performance optimizations for pnpm

### 3. Git Hooks

Pre-commit hook (`.github/hooks/pre-commit`) that:
- Blocks commits with `package-lock.json`
- Blocks commits with `yarn.lock`
- Warns if `pnpm-lock.yaml` is missing
- Prevents committing `node_modules`

### 4. CI/CD Enforcement

GitHub Actions workflow (`.github/workflows/ci.yml`) that:
- Checks for correct lock file on every push/PR
- Uses pnpm for all CI operations
- Fails if wrong lock files are detected

### 5. Documentation

- Clear README instructions
- Migration script for developers
- This enforcement documentation

## Error Messages

When trying to use npm/yarn, you'll see:
```
This project requires pnpm. Please install it from https://pnpm.io
```

## Migration Guide

If you're coming from npm/yarn:

1. Install pnpm globally:
   ```bash
   npm install -g pnpm
   # or
   brew install pnpm
   ```

2. Run the migration script:
   ```bash
   ./scripts/migrate-to-pnpm.sh
   ```

3. Use pnpm commands:
   - `pnpm install` instead of `npm install`
   - `pnpm add` instead of `npm add`
   - `pnpm dev` instead of `npm run dev`

## Troubleshooting

### Common Issues

1. **"This project requires pnpm"**
   - Solution: Install pnpm and use it instead of npm/yarn

2. **"Command not found: pnpm"**
   - Solution: Install pnpm globally first

3. **Pre-commit hook fails**
   - Solution: Remove wrong lock files, use pnpm

### Support

If you encounter issues with pnpm enforcement:
1. Check this documentation
2. Run the migration script
3. Ensure you have the latest pnpm version

## Why These Enforcements?

- **Consistency**: Everyone uses the same package manager
- **Performance**: pnpm is faster and more efficient
- **Security**: Stricter dependency resolution
- **Disk Space**: Shared dependency storage
- **Monorepo Ready**: Better support for workspaces

## Deployment

When deploying (e.g., to Vercel):
1. Set Install Command to: `pnpm install`
2. Set Build Command to: `pnpm build`
3. Ensure the platform supports pnpm

## Future Considerations

- Automated pnpm version updates via Renovate/Dependabot
- Pre-push hooks for additional validation
- Automated migration on clone (optional)