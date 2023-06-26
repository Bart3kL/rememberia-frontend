import { FormProps } from "../../../sections/loginPage/Auth/utilityTypes";

import styles from "./rwd.module.scss";
const { wrapper, wrapperInput, wrapperDescription } = styles;

const AuthForm = ({
  label,
  pleaceholder,
  remindPasswordLabel,
}: FormProps["inputs"][0]) => {
  return (
    <div className={wrapper}>
      <div className={wrapperInput}>
        <input placeholder={pleaceholder} type="text" id={label} />
      </div>
      <div className={wrapperDescription}>
        <label htmlFor={label}>{label}</label>
        {remindPasswordLabel && <p>{remindPasswordLabel}</p>}
      </div>
    </div>
  );
};

export default AuthForm;
