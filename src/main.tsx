import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./assets/fonts/fonts.css"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter basename={"/stage_ballet"}>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
