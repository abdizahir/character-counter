import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CharacterProvider } from './store/CharacterProvider';
import { ThemeContextProvider } from './store/ThemeContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
