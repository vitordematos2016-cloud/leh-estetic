import { CatalogPage } from './pages/CatalogPage'
import { ManagerPage } from './pages/ManagerPage'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/gestao') {
    return <ManagerPage />
  }

  return <CatalogPage />
}

export default App
