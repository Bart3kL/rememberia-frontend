import { AuthLoginProps } from "./types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/loginpage/Form";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine } = styles;

const AuthLogin = ({ header, form }: AuthLoginProps) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperLine}>{form.orEmaillabel}</div>
      <Form {...form} />
    </section>
  );
};

export default AuthLogin;
