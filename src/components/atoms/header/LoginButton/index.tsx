import { Link } from "react-router-dom";

import { LoginButtonProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const LoginButton = ({ label, href, onClick }: LoginButtonProps) => {
  return (
    <button className={wrapper} onClick={onClick}>
      {href && <Link to={href}>{label}</Link>}
      {onClick && <p>{label}</p>}
    </button>
  );
};

export default LoginButton;
