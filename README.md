# 🚀 Modern Web Boilerplate

A production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and modern development tools. Perfect for kickstarting your next web project with industry best practices built-in.

## ✨ Features

- **⚡ Next.js 15** - The React framework for production with App Router
- **🔷 TypeScript** - Type safety and enhanced developer experience
- **🎨 Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **⚛️ React 19** - Latest React with concurrent features
- **🚀 Turbopack** - Ultra-fast bundler for lightning-fast development
- **🔧 ESLint + Prettier** - Code linting and formatting
- **🎯 Class Variance Authority** - Type-safe component variants
- **📦 Lucide React** - Beautiful, consistent icon library
- **📁 Optimized Structure** - Well-organized project architecture

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm/yarn/pnpm** - Package manager

### Installation

1. **Clone or download** this boilerplate:
   ```bash
   git clone https://github.com/Mhudlark/web-boilerplate.git
   cd web-boilerplate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
web-boilerplate/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility functions
├── public/                # Static assets
├── .vscode/              # VS Code settings
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run prettier` | Format code with Prettier |

## 🎨 Built-in Components & Utilities

### Styling System
- **Tailwind CSS 4** - Latest version with enhanced features
- **Class Variance Authority** - Type-safe component variant management
- **clsx** - Conditional className utility

### Icons
- **Lucide React** - Beautiful, customizable icons
- Tree-shakeable and optimized for performance

### Development Experience
- **TypeScript** - Full type safety
- **ESLint** - Code quality enforcement
- **Prettier** - Consistent code formatting
- **VS Code settings** - Optimized editor configuration

## 🚀 Deployment

This boilerplate is ready to deploy on various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Works out of the box
- **AWS Amplify**: Compatible with Next.js
- **Railway**: Simple deployment process
- **DigitalOcean App Platform**: Full Next.js support

## 🔧 Customization

### Adding New Components
Create reusable components in a `components/` directory:
```tsx
// components/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-gray-300 hover:bg-gray-50',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

export function Button({ variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }))} {...props}>
      {children}
    </button>
  )
}
```

### Extending Tailwind Configuration
Modify `tailwind.config.ts` to add custom colors, fonts, or utilities:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js/) - Source code and examples

### Additional Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Run `npm run lint` before committing
- Add TypeScript types for new functions
- Test your changes thoroughly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org) - Amazing React framework
- [Tailwind Labs](https://tailwindcss.com) - Beautiful utility-first CSS
- [Vercel](https://vercel.com) - Excellent deployment platform
- [TypeScript Team](https://www.typescriptlang.org) - Type safety for JavaScript

---

**Happy coding!** 🎉 If you find this boilerplate helpful, please consider giving it a ⭐ on GitHub.