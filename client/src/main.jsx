import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { AppBrowserRouter } from './lib/routing/AppBrowserRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppBrowserRouter} />
  </StrictMode>,
)
