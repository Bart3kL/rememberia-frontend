import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useHttpClient } from "./http-hook";
import { AuthContext } from "./../context/auth-context";

export const useAuthGoogle = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();

  const register = useGoogleLogin({ onSuccess: handleGoogleRegisterSuccess });

  async function handleGoogleRegisterSuccess(tokenResponse: any) {
    try {
      const responseData = await sendRequest(
        "http://localhost:8000/api/users/signup",
        "POST",
        JSON.stringify({ googleAccessToken: tokenResponse.access_token }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login(responseData.userId, responseData.token);
    } catch (err) {}
  }

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  async function handleGoogleLoginSuccess(tokenResponse: any) {
    try {
      const responseData = await sendRequest(
        "http://localhost:8000/api/users/login",
        "POST",
        JSON.stringify({ googleAccessToken: tokenResponse.access_token }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login(responseData.userId, responseData.token);
    } catch (err) {}
  }
  return {
    register,
    login,
    isLoading,
  };
};
