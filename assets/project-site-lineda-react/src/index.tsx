import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router  } from './routerV7';
import { ProductProvider } from './contexts/ProductProvider'; // Importez le ProductProvider
import './style/index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductProvider>
    <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
