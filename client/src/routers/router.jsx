import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import HomePage from "../homePage/HomePage";
import About from "../components/About";
import Courses from "../components/Courses";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
          path:"/course",
          element:<Courses/>
      }
      ]
    },
  ]);

export default router;