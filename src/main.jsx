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
import Home from './components/body/home/Home';
import Blog from './components/body/Blog'
import About from './components/body/About';
import HireChef from './components/body/HireChef'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/join",
        element: <Join></Join>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/hireChef",
        element: <PrivateRoute><HireChef></HireChef></PrivateRoute>
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
