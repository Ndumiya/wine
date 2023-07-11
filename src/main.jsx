import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import './index.css'

import ContextState from './context/contextStates'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from './pages/Register';
import Login from './pages/Login';
import ProductView from './components/ProductView';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/menu/:title",
    element: <ProductView/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

  <ContextState>
    <app/>
  </ContextState>
)
