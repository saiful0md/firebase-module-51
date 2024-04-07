import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Profile from './components/Profile';
import Register from './components/Register';
import Root from './components/Root';
import './index.css';
import PriveteRoute from './routes/PriveteRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PriveteRoute><Orders></Orders></PriveteRoute>
      },
      {
        path: '/profile',
        element: <PriveteRoute><Profile></Profile></PriveteRoute>
      },
      {
        path: '/dashboard',
        element: <PriveteRoute><Dashboard></Dashboard></PriveteRoute>
      }
    ])
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
