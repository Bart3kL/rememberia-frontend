import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./homePage";
import RegisterPage from "./registerPage";
import LoginPage from "./loginPage";
import ErrorPage from "./errorPage";

import { getPage } from "../lib/contentful/client";
import { AuthContext } from "../lib/context/auth-context";
import { useAuth } from "../lib/hooks/useAuth";

const publicRoutes = createBrowserRouter([
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
const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return getPage("homePage");
    },
  },

  {
    path: "/przedmioty",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return getPage("loginPage");
    },
  },
]);

const Router = () => {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <RouterProvider router={token ? privateRoutes : publicRoutes} />
    </AuthContext.Provider>
  );
};

export default Router;
