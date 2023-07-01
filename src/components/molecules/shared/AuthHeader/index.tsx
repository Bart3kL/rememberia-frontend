import AuthLink from "../../../atoms/shared/AuthLink";

import { HeaderProps } from "../../../sections/loginPage/AuthLogin/utilityTypes";

import styles from "./rwd.module.scss";
const { wrapper, wrapperNav, wrapperButtons } = styles;

const AuthHeader = ({ login, register, buttons }: HeaderProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperNav}>
        <AuthLink {...register} />
        <AuthLink {...login} />
      </div>
    </div>
  );
};

export default AuthHeader;
