import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Path disesuaikan ke folder components
import '../src/index.css'; // Path ke file CSS utama (berisi Tailwind)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);