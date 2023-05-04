import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './routes/Blog/Blog.jsx';
import Login from './routes/Login/Login.jsx';
import Register from './routes/Register/Register.jsx';
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
