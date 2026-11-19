import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TermsPage from './TermsPage'
import PrivacyPage from './PrivacyPage'
import './index.css'

function Root() {
  const getPage = () => {
    if (window.location.hash === '#terms') return 'terms'
    if (window.location.hash === '#privacy') return 'privacy'
    return 'home'
  }

  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage())
      const title = window.location.hash === '#terms'
        ? 'Terms & Conditions — Zenith Studios'
        : window.location.hash === '#privacy'
          ? 'Privacy Policy — Zenith Studios'
          : 'Zenith Studios'
      document.title = title
      window.scrollTo({ top: 0 })
    }

    onHashChange()

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return page === 'terms' ? <TermsPage /> : page === 'privacy' ? <PrivacyPage /> : <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
