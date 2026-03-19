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
        Component: Home,
      },
      {
        path: "/apps",
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
