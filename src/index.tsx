import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Routing';
import { Reset } from 'styled-reset';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>
)
