import { FormProps } from "../../../sections/loginPage/AuthLogin/utilityTypes";

import { useRegisterForm } from "./hooks";
import AuthForm from "../../../atoms/shared/AuthForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLogin } = styles;

const Form = ({ inputs, acceptTerms, buttonLabel }: any) => {
  const { formState, handleInputBlur, handleSubmit } = useRegisterForm();

  const { mandatoryInputs } = formState;

  return (
    <form className={wrapper} onSubmit={handleSubmit}>
      <AuthForm
        label="E-MAIL"
        pleaceholder="user@rememberia.com"
        type="email"
        id="email"
        value={mandatoryInputs.email.value}
        onBlur={handleInputBlur}
        isError={mandatoryInputs.email.hasError}
        error={mandatoryInputs.email.error}
      />
      <AuthForm
        label="HASŁO"
        pleaceholder="●●●●●●●●"
        type="password"
        id="password"
        value={mandatoryInputs.password.value}
        onBlur={handleInputBlur}
        isError={mandatoryInputs.password.hasError}
        error={mandatoryInputs.password.error}
        isLogin
      />

      <div className={wrapperLogin}>
        <button type="submit" id="submit">
          {buttonLabel}
        </button>
        <p>{acceptTerms}</p>
      </div>
    </form>
  );
};

export default Form;
