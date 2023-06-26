import { AuthProps } from "./types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import LoginForm from "../../../molecules/shared/LoginForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine } = styles;

const Auth = ({ header, form }: AuthProps) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperLine}>{form.orEmaillabel}</div>
      <LoginForm {...form} />
    </section>
  );
};

export default Auth;
