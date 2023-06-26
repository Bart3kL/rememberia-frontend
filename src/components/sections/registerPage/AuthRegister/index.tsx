import { AuthLoginProps } from "./types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/registerPage/Form";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine, wrapperForm, wrapperFormLogin } = styles;

const AuthRegister = ({ header, form }: AuthLoginProps) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperLine}>{form.orEmaillabel}</div>
      <div className={wrapperForm}>
        <Form {...form} />
      </div>
    </section>
  );
};

export default AuthRegister;
