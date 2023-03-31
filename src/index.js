import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

