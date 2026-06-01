/**
 * Application Entry Point
 * Initializes React, Tailwind CSS, and renders the app
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import { queryClient } from './query/queryClient'



/**
 * Mount the React application to the DOM
 * Tailwind CSS is loaded via index.css
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)


