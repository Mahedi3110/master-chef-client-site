import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './components/body/Profile'
import PrivateRoute from './privateRoute/PrivateRoute'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import NotFound from './components/body/NotFound';
import Join from './components/body/Join';
import AuthProvider from './provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <App></App>
      },
      {
        path: "/join",
        element: <Join></Join>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
  {
    path: "/*",
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
