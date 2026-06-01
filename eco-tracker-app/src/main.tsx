/**
 * Application Entry Point
 * Initializes React, Tailwind CSS, and renders the app
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * Mount the React application to the DOM
 * Tailwind CSS is loaded via index.css
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
