import { AuthLoginProps } from "./types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/loginpage/Form";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine, wrapperForm } = styles;

const AuthLogin = ({ header, form }: AuthLoginProps) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperForm}>
        <Form {...form} />
      </div>
    </section>
  );
};

export default AuthLogin;
