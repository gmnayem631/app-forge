import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
