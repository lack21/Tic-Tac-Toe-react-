import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './App';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
