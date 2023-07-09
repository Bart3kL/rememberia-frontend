import { Icons } from "../../../../shared";
import { AuthLoginProps } from "./types";
import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/loginpage/Form";
import { useAuthGoogle } from "./../../../../lib/hooks/useAuthGoogle";
import AuthButton from "../../../atoms/shared/AuthButton";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine, wrapperForm, wrapperGoogleAuth } = styles;

const AuthLogin = ({ header, form }: AuthLoginProps) => {
  const { login, isLoading } = useAuthGoogle();
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperGoogleAuth}>
        <AuthButton
          label="Zalgouj się przez Google"
          onClick={() => login()}
          isLoading={isLoading}
        />
      </div>
      <div className={wrapperLine}>{form.orEmaillabel}</div>
      <div className={wrapperForm}>
        <Form {...form} />
      </div>
    </section>
  );
};

export default AuthLogin;
