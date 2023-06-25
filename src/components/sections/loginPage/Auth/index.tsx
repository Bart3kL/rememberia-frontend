import { SliderProps } from "./types";

import AuthHeader from "../../../molecules/shared/AuthHeader";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const Auth = ({ header }: any) => {
  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
    </section>
  );
};

export default Auth;
