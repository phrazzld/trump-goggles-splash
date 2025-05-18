# T009 - Create RetroButton Component Structure and Props

## Objective
Create the RetroButton component with proper TypeScript interfaces and variant management using class-variance-authority.

## Implementation Approach
1. Replace placeholder component with proper structure
2. Define RetroButtonProps interface extending ButtonHTMLAttributes
3. Include variant ('primary' | 'secondary') and size ('sm' | 'md' | 'lg') props
4. Use class-variance-authority (cva) to manage variant classes
5. Create button component that accepts and applies all props

## Interface Structure
```typescript
interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
```

## Notes
- Use forwardRef for proper ref handling
- Set default variant to 'primary' and size to 'md'
- Use cn utility from lib/utils for class name merging