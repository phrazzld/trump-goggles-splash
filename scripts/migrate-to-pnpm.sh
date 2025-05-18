#!/bin/bash

echo "🚀 Migrating to pnpm..."

# Remove wrong lock files
if [ -f "package-lock.json" ]; then
    echo "Removing package-lock.json..."
    rm package-lock.json
fi

if [ -f "yarn.lock" ]; then
    echo "Removing yarn.lock..."
    rm yarn.lock
fi

# Remove node_modules
if [ -d "node_modules" ]; then
    echo "Removing node_modules..."
    rm -rf node_modules
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed!"
    echo "Please install pnpm first:"
    echo "  npm install -g pnpm"
    echo "  OR"
    echo "  brew install pnpm (macOS)"
    exit 1
fi

# Install with pnpm
echo "Installing dependencies with pnpm..."
pnpm install

echo "✅ Migration complete! You're now using pnpm."
echo ""
echo "Next steps:"
echo "1. Use 'pnpm' instead of 'npm' or 'yarn' for all commands"
echo "2. Run 'pnpm dev' to start the development server"
echo "3. Commit the pnpm-lock.yaml file"