## Using React without a framework
  • Bundlers (e.g., Vite, Parcel)
   - Process your project's JS modules and assets
   - Resolve imports and dependencies.
   - Create optimized files that can be efficiently loaded by the browser.

## Three.js
- Not part of React.
- A JavaScript library for creating and rendering 3D graphics using WebGL.
- Used for 3D models, games, animations, simulations, and interactive visualizations.

```
JavaScript
    └──► React (Core Library)
        - Components
        - JSX
        - State
        - Props
        - Hooks
        - UI logic
        │
        ├──► React DOM
        │    - Renderer for web browsers
        │    - Converts React components into HTML DOM
        │
        ├──► React Native
        │    - Renderer for Android and iOS mobile apps
        │    - Converts React components into native mobile UI elements
        │
        └──► React Three Fiber
             - React renderer for Three.js
             - Lets developers build Three.js scenes using React components
                └──► Three.js
                        └──► WebGL
                               └──► 3D Graphics & Animations
```
## npm (Node Package Manager)
  - Installed automatically with Node.js.
  - Lets you install and manage JavaScript packages (libraries, frameworks, tools).
  - You can install packages locally (for a project) or globally (for your system).
  - Package managers exist for many programming languages
       - JavaScript → npm
       - Java → Maven, Gradle
       - Python → pip
       - Rust → Cargo
       - Go → go modules
## npx (Node Package eXecute / Node Package Executor)
  - Comes with npm.
  - Lets you run a package without installing it globally.
  - Useful for one-time commands.

CRA(create-react-app) - bulky utility -> deprecated -> frameworks/build tools used now mostly
package.json -> main file to understand how the react project is structured

HMR (Hot Module Replacement) is a development feature that lets you update parts of your application without reloading the entire page. Instead of refreshing the page after every change, you simply save the file, and the development server automatically updates only the affected module(s), making development faster and often preserving the application's state.

creating a project using vite : `npm create vite@latest` or `npm create vite` (modern npm versions use the latest version by default)
## package.json Scripts

- `npm run dev` or just `npm dev`
  - Starts the Vite development server with Hot Module Replacement (HMR).

- `npm run build`
  - Creates an optimized production build in the `dist/` folder. (dist -> distribution)

- `npm run preview`
  - Serves the production build locally to test it before deployment.

- `npm run lint`
  - Runs ESLint to check for code quality issues and potential bugs.