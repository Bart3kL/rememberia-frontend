import { AuthHeaderProps } from "./types";

import AuthForm from "../../../atoms/shared/AuthForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperCard } = styles;

const LoginForm = ({ inputs, acceptTerms }: any) => {
  return (
    <div className={wrapper}>
      {inputs.map((input: any, idx: any) => (
        <AuthForm {...input} key={input.label + idx} />
      ))}
    </div>
  );
};

export default LoginForm;
