import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

//context
import { NavigationProvider } from './context/navigationContext';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
)
