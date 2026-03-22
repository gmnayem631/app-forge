import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installations from "../pages/Installations/Installations";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/apps.json").then((response) => response.json()),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/apps.json").then((response) => response.json()),
        Component: Apps,
      },
      {
        path: "/installations",
        Component: Installations,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/apps.json").then((response) => response.json()),
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
