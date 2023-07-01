import { AuthLoginProps } from "../../loginPage/AuthLogin/types";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/registerPage/Form";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import styles from "./rwd.module.scss";
const { wrapper, wrapperLine, wrapperForm } = styles;

const AuthRegister = ({ header, form }: AuthLoginProps) => {
  const navigate = useNavigate();
  const API = axios.create({ baseURL: "http://localhost:8000" });

  API.interceptors.request.use((req: any) => {
    if (localStorage.getItem("user_info")) {
      req.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("user_info")!
      )}`;
    }

    return req;
  });

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  async function handleGoogleLoginSuccess(tokenResponse: any) {
    try {
      const { data } = await API.post("/api/users/signup", {
        googleAccessToken: tokenResponse.access_token,
      });
      console.log(data);
      return data;
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message); // Wyświetlenie błędu przy użyciu biblioteki toast
      } else {
        toast.error("Something went wrong. Please try again."); // Wyświetlenie ogólnego błędu
      }
    }
  }

  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <button onClick={() => login()}> singn up with google</button>
      <div className={wrapperForm}>
        <Form {...form} />
      </div>
    </section>
  );
};

export default AuthRegister;
