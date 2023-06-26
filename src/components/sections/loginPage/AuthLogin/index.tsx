import { AuthLoginProps } from "./types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import LoginForm from "../../../molecules/shared/LoginForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine } = styles;

const AuthLogin = ({ header, form }: AuthLoginProps) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperLine}>{form.orEmaillabel}</div>
      <LoginForm {...form} />
    </section>
  );
};

export default AuthLogin;
