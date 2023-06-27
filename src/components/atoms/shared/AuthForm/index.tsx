import { FormProps } from "../../../sections/loginPage/AuthLogin/utilityTypes";

import styles from "./rwd.module.scss";
const { wrapper, wrapperInput, wrapperDescription } = styles;

const AuthForm = ({
  label,
  pleaceholder,
  remindPasswordLabel,
  id,
  type,
  value,
  onBlur,
  isError,
  error,
  errorAtleastOneNumber,
  errorAtleastOneLetterInCapitalCase,
  errorAlteastOneSpecialCharacter,
  isLogin,
}: any) => {
  return (
    <div className={wrapper}>
      <div className={wrapperDescription}>
        <label htmlFor={id}>{label}</label>
      </div>
      <div className={wrapperInput}>
        <input
          placeholder={pleaceholder}
          type={type}
          id={id}
          value={value}
          onChange={onBlur}
          onBlur={onBlur}
        />
      </div>
      <div className={wrapperDescription}>
        {id !== "password" && isError && <label htmlFor="">{error}</label>}
        {isError && id === "password" && (
          <ul>
            {error.length > 0 && <li>{error}</li>}
            {!isLogin && <li>{errorAtleastOneNumber}</li>}
            {!isLogin && <li>{errorAtleastOneLetterInCapitalCase}</li>}
            {!isLogin && <li>{errorAlteastOneSpecialCharacter}</li>}
          </ul>
        )}
        {remindPasswordLabel && <p>{remindPasswordLabel}</p>}
      </div>
    </div>
  );
};

export default AuthForm;
