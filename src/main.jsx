import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RandumContextProvider } from './context.jsx'

createRoot(document.getElementById('root')).render(
  <RandumContextProvider>
    <App />
  </RandumContextProvider>
)
