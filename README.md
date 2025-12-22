# Bootstrap Internship Project - Task 2

## 🎯 Project Overview

This is **Task 2** of the Bootstrap Internship Project, which recreates the exact same UI from Task 1 using modern web development tools and best practices. This project is completely separate from Task 1 and uses a modern templating engine (Nunjucks) with a powerful bundler (Vite).

## 🚀 Technology Stack

### Templating Engine: Nunjucks
**Why Nunjucks?**
- **Template Inheritance**: Allows creating a base layout and extending it, promoting DRY (Don't Repeat Yourself) principles
- **Reusable Components**: Header, footer, and other components can be created once and included everywhere
- **Logic in Templates**: Supports conditionals, loops, and variables for dynamic content generation
- **Powerful & Flexible**: Mozilla's templating language with extensive features and excellent documentation
- **Static Site Generation**: Perfect for generating static HTML files while maintaining development flexibility
- **Similar to Jinja2**: Familiar syntax for Python developers, easy learning curve

### Bundler: Vite
**Why Vite?**
- **Lightning Fast**: Uses native ES modules for instant server start and Hot Module Replacement (HMR)
- **Optimized Build**: Rollup-based production builds with automatic code splitting
- **Modern & Simple**: Minimal configuration required, works out of the box
- **Asset Handling**: Built-in support for CSS, images, fonts, and other assets
- **Development Experience**: Superior DX with instant updates and clear error messages
- **Production Ready**: Automatic minification, tree-shaking, and optimization
- **Plugin Ecosystem**: Rich plugin support including our Nunjucks integration

## 📁 Project Structure

```
bootstrap-internship-project-task2/
├── src/                          # Source files
│   ├── templates/                # Nunjucks templates
│   │   ├── base.njk             # Base layout template
│   │   ├── index.njk            # Home page template
│   │   ├── header.njk           # Navigation header component
│   │   └── footer.njk           # Footer component
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css        # Custom styles
│   │   ├── js/
│   │   │   └── main.js          # Main JavaScript entry
│   │   └── images/              # Image assets
│   └── index.html               # HTML entry point
├── dist/                         # Production build output
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## 🔧 Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v7 or higher) or yarn

### Steps

1. **Navigate to the project directory**
   ```bash
   cd bootstrap-internship-project-task2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🎮 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

This will:
- Start a local development server (usually at `http://localhost:3000`)
- Enable hot module replacement (HMR) for instant updates
- Automatically open your browser

### Production Build

Build the project for production:

```bash
npm run build
```

This will:
- Compile Nunjucks templates to static HTML
- Bundle and minify JavaScript
- Process and optimize CSS
- Generate optimized assets
- Output everything to the `dist/` folder

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the built files from the `dist/` directory.

## 📝 Template Structure

### Base Template (`base.njk`)
The foundation template that includes:
- HTML document structure
- Meta tags and SEO elements
- Bootstrap CSS and Icons
- Custom CSS link
- Header and footer includes
- Content blocks for child templates
- JavaScript includes

### Child Templates
- **`index.njk`**: Extends base template with home page content
- Uses template inheritance: `{% extends "base.njk" %}`
- Defines content blocks: `{% block content %}...{% endblock %}`

### Component Partials
- **`header.njk`**: Navigation bar component
- **`footer.njk`**: Footer component
- Included using: `{% include "header.njk" %}`

## 🎨 Styling

All custom styles are in `src/assets/css/style.css`:
- CSS variables for theming
- Bootstrap overrides and extensions
- Component-specific styles
- Responsive design rules
- Utility classes

## 📦 Build Output

The production build (`npm run build`) generates:
- `dist/index.html` - Optimized HTML file
- `dist/assets/` - Bundled and minified CSS/JS
- All assets are fingerprinted for cache busting

## 🔄 Differences from Task 1

| Aspect | Task 1 | Task 2 |
|--------|--------|--------|
| **HTML** | Static HTML files | Nunjucks templates |
| **Structure** | Flat file structure | Organized src/ folder |
| **Reusability** | Copy-paste components | Template inheritance & includes |
| **Build** | No build process | Vite bundler |
| **Assets** | Direct linking | Bundled & optimized |
| **Development** | Manual refresh | Hot Module Replacement |
| **Production** | Serve as-is | Optimized dist/ output |

## 🎯 Key Features

✅ **Exact UI Match**: Recreates Task 1 design pixel-perfect  
✅ **Template Inheritance**: DRY code with base layouts  
✅ **Component Reusability**: Header/footer included once  
✅ **Modern Build Pipeline**: Vite for fast development  
✅ **Production Optimized**: Minified and bundled output  
✅ **Hot Module Replacement**: Instant updates during development  
✅ **Clean Code**: Well-organized and maintainable  

## 🛠️ Configuration

### Vite Configuration (`vite.config.js`)
- Configured for Nunjucks template compilation
- Sets up proper paths for templates and assets
- Defines build output directory
- Configures development server

### Package Configuration (`package.json`)
- Lists all dependencies
- Defines npm scripts for dev/build/preview
- Project metadata

## 📚 Learning Resources

- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Vite Documentation](https://vitejs.dev/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)

## 🤝 Development Workflow

1. **Start development server**: `npm run dev`
2. **Make changes** to templates or assets
3. **See instant updates** in browser (HMR)
4. **Build for production**: `npm run build`
5. **Test production build**: `npm run preview`
6. **Deploy** the `dist/` folder

## 📌 Important Notes

- **DO NOT** modify files in `dist/` - they are auto-generated
- Always work in `src/` directory
- Run `npm run build` before deploying
- The final output matches Task 1 exactly
- This is a separate, standalone project from Task 1

## 🎓 Task Requirements Met

✅ Modern templating engine (Nunjucks) implemented  
✅ Bundler (Vite) properly configured  
✅ Exact UI/content match with Task 1  
✅ Separate project with independent build system  
✅ Proper folder structure maintained  
✅ Output generated in dist/ folder  
✅ Clean, commented, production-ready code  
✅ Comprehensive documentation provided  

## 📄 License

MIT License - Feel free to use this project for learning purposes.

---

**Built with ❤️ using Nunjucks + Vite**
