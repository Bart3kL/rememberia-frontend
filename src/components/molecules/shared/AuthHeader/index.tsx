import AuthLink from "../../../atoms/shared/AuthLink";
import AuthButton from "../../../atoms/shared/AuthButton";

import { HeaderProps } from "../../../sections/loginPage/Auth/utilityTypes";

import styles from "./rwd.module.scss";
const { wrapper, wrapperNav, wrapperButtons } = styles;

const AuthHeader = ({ login, register, buttons }: HeaderProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperNav}>
        <AuthLink {...register} />
        <AuthLink {...login} />
      </div>
      <div className={wrapperButtons}>
        {buttons.map((button, idx) => (
          <AuthButton {...button} key={button.label + idx} />
        ))}
      </div>
    </div>
  );
};

export default AuthHeader;
