import { FormProps } from "../../../sections/loginPage/AuthLogin/utilityTypes";

import AuthForm from "../../../atoms/shared/AuthForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLogin } = styles;

const LoginForm = ({ inputs, acceptTerms, buttonLabel }: FormProps) => {
  return (
    <div className={wrapper}>
      {inputs.map((input, idx) => (
        <AuthForm {...input} key={input.label + idx} />
      ))}
      <div className={wrapperLogin}>
        <button>{buttonLabel}</button>
        <p>{acceptTerms}</p>
      </div>
    </div>
  );
};

export default LoginForm;
