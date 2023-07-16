import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./homePage";
import RegisterPage from "./registerPage";
import LoginPage from "./loginPage";
import ErrorPage from "./errorPage";
import BranchOfScience from "./branchOfScience";

import { getPage } from "../lib/contentful/client";
import { AuthContext } from "../lib/context/auth-context";
import { useAuth } from "../lib/hooks/useAuth";
import { useFetch } from "../lib/api/useFetch";

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
  {
    path: "/przedmioty/:branchOfScienceId",
    element: <BranchOfScience />,
    errorElement: <ErrorPage />,
    loader: async ({ params }) => {
      const subjects = await useFetch(
        `http://localhost:8000/api/subjects?branchId=${params.branchOfScienceId}`,
        "GET",
        null
      );

      return { ...(await getPage("branchOfScience")), subjects };
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
    path: "/przedmioty/:branchOfScienceId",
    element: <BranchOfScience />,
    errorElement: <ErrorPage />,
    loader: async ({ params }) => {
      const subjects = await useFetch(
        `http://localhost:8000/api/subjects?branchId=${params.branchOfScienceId}`,
        "GET",
        null
      );

      return { ...(await getPage("branchOfScience")), subjects };
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
      <div id="portal"></div>
    </AuthContext.Provider>
  );
};

export default Router;
