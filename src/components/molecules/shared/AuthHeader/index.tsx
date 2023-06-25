import { Link } from "react-router-dom";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const AuthHeader = ({ login, register, buttons }: any) => {
  return (
    <div className={wrapper}>
      <div>
        <h3>
          <Link to={register.href}>{register.label}</Link>
        </h3>
        <h3>
          <Link to={login.href}>{login.label}</Link>
        </h3>
      </div>
    </div>
  );
};

export default AuthHeader;
