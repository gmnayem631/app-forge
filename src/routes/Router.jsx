import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../layouts/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

export default router;
