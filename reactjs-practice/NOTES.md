## Using React without a framework
  • Bundlers (e.g., Vite, Parcel)
   - Process your project's JS modules and assets
   - Resolve imports and dependencies.
   - Create optimized files that can be efficiently loaded by the browser.

## Three.js
- Not part of React.
- A JavaScript library for creating and rendering 3D graphics using WebGL.
- Used for 3D models, games, animations, simulations, and interactive visualizations.

JavaScript
    │
    ▼
React (Core Library)
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
                │
                ▼
             Three.js
                │
                ▼
              WebGL
                │
                ▼
     3D Graphics & Animations