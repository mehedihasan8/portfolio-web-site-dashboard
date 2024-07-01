import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Skill from "../pages/skill/Skill";
import Blog from "../pages/blog/Blog";
import AddProject from "../pages/project/AddProject";
import LoginPage from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <div />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/project",
        element: <AddProject />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
