import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navbar from './Navbar';
import Error from './Error';
import Home from './routes/Home';
import Places from './routes/Places';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/places',
        element: <Places />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
