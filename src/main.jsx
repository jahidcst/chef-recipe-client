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
import RecipeLayout from './components/RecipeLayout/RecipeLayout';
import Recipe from './components/Chef/Recipe';

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
  {
    path: 'recipe',
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: './recipe/:id',
        element: <Recipe></Recipe>,
        loader: ({params}) => fetch(`http://localhost:5000/allData/${params.id}`)
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
