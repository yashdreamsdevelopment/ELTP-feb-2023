import React from 'react'
import ReactDOM from 'react-dom/client'
// import app from './App.tsx'
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <app /> // components need to be capitalized */}
    <App />
  </React.StrictMode>
)
