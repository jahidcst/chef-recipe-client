import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViewRecipe from "../pages/ViewRecipe/ViewRecipe";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-server-jahidcst.vercel.app/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>    
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
