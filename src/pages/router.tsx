import { createBrowserRouter } from "react-router-dom";

import HomePage from "./homePage/";
import ErrorPage from "./errorPage";
import { getPage } from "../lib/contentful/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return getPage("homePage");
    },
  },
]);

export default router;
