import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StrictMode } from 'react'
import { UserProvider } from './contexts/user.jsx'
import { FiltersProvider } from './contexts/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <UserProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </UserProvider>
  </StrictMode>
)