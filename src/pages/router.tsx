import { createBrowserRouter } from "react-router-dom";

import HomePage from "./homePage";
import RegisterPage from "./registerPage";
import LoginPage from "./loginPage";
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
  {
    path: "/logowanie",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return getPage("loginPage");
    },
  },
  {
    path: "/rejestracja",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return getPage("registerPage");
    },
  },
]);

export default router;
