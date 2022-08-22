import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main';
import { Reset } from 'styled-reset';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <Main />
  </React.StrictMode>
)
