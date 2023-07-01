import { AuthLoginProps } from "../../loginPage/AuthLogin/types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/registerPage/Form";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine, wrapperForm } = styles;

const AuthRegister = ({ header, form }: AuthLoginProps) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />

      <div className={wrapperForm}>
        <Form {...form} />
      </div>
    </section>
  );
};

export default AuthRegister;
