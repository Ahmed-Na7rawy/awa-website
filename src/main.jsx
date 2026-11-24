import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './v9-layout.css'
import './awa-reference-home.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
