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
            {errorAtleastOneNumber.length > 0 && (
              <li>{errorAtleastOneNumber}</li>
            )}
            {errorAtleastOneLetterInCapitalCase.length > 0 && (
              <li>{errorAtleastOneLetterInCapitalCase}</li>
            )}
            {errorAlteastOneSpecialCharacter.length > 0 && (
              <li>{errorAlteastOneSpecialCharacter}</li>
            )}
          </ul>
        )}
        {remindPasswordLabel && <p>{remindPasswordLabel}</p>}
      </div>
    </div>
  );
};

export default AuthForm;
