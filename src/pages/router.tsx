import { createBrowserRouter } from "react-router-dom";

import HomePage from "./homePage/";
import ErrorPage from "./errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
