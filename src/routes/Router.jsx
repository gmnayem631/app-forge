import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installations from "../pages/Installations/Installations";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/AppDetails/AppDetails";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
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
      {
        path: "/apps/:id",
        loader: ({ params }) =>
          fetch("/apps.json")
            .then((response) => response.json())
            .then((apps) => apps.find((app) => app.id === Number(params.id))),
        element: (
          <Suspense>
            <AppDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
