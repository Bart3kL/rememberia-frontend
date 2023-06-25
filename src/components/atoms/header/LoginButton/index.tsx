import { Link } from "react-router-dom";

import { LoginButtonProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const LoginButton = ({ label, href }: LoginButtonProps) => {
  return (
    <button className={wrapper}>
      <Link to={href}>{label}</Link>
    </button>
  );
};

export default LoginButton;
