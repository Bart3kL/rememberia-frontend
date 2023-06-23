import { LoginButtonProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const LoginButton = ({ label }: LoginButtonProps) => {
  return <button className={wrapper}>{label}</button>;
};

export default LoginButton;
