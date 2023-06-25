import { SliderProps } from "./types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import LoginForm from "../../../molecules/shared/LoginForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine } = styles;

const Auth = ({ header, form }: any) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperLine}>LUB E-MAIL</div>
      <LoginForm {...form} />
    </section>
  );
};

export default Auth;
