import { AuthLoginProps } from "./types";
import { useGoogleLogin } from "@react-oauth/google";
import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/loginpage/Form";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine, wrapperForm } = styles;

const AuthLogin = ({ header, form }: AuthLoginProps) => {
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  function handleGoogleLoginSuccess(tokenResponse: any) {
    return tokenResponse.access_token;
  }

  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <button onClick={() => login()}>sin in with google</button>
      <div className={wrapperForm}>
        <Form {...form} />
      </div>
    </section>
  );
};

export default AuthLogin;
