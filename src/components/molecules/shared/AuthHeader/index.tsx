import { Link } from "react-router-dom";

import { Icons } from "../../../../shared";
import { HeaderProps } from "../../../sections/loginPage/AuthLogin/utilityTypes";

import AuthLink from "../../../atoms/shared/AuthLink";

import styles from "./rwd.module.scss";
const { wrapper, wrapperNav, wrapperClose } = styles;

const AuthHeader = ({ login, register, buttons }: HeaderProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperNav}>
        <AuthLink {...register} />
        <AuthLink {...login} />
      </div>

      <Link className={wrapperClose} to={"/"}>
        <Icons.CloseSVG />
      </Link>
    </div>
  );
};

export default AuthHeader;
