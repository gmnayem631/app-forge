import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installations from "../pages/Installations/Installations";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("apps.json").then((response) => response.json()),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("apps.json").then((response) => response.json()),
        Component: Apps,
      },
      {
        path: "/installations",
        Component: Installations,
      },
    ],
  },
]);

export default router;
