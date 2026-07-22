import { StrictMode } from 'react'  //before react 18, we used to import ReactDOM from 'react-dom' and use ReactDOM.render() to render the app. Now, we import createRoot() from react-dom/client, create a React root, and then call root.render() to render the application.
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />
  //StrictMode is a tool for highlighting potential problems in an application -> optional, but recommended for development.
)
