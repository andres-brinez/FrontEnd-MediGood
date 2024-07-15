import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesHandler from './Router';
import { GlobalContextProvider } from './Context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GlobalContextProvider> {/* Para que sea por el contexto */}
    <RoutesHandler/>
  </GlobalContextProvider>
  </React.StrictMode>
);

