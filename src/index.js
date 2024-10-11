import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import CustomerSignupForm from './components/customer-signup';
import EmployerSignupForm from './components/employer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <Signup />,
    children: [
      {
        path: 'customer',
        element: <CustomerSignupForm />, // Signup form for customers
      },
      {
        path: 'employer',
        element: <EmployerSignupForm />, // Signup form for Employers
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
