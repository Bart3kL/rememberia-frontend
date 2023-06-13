import styles from "./rwd.module.scss";
const { wrapper } = styles;

const LoginButton = ({ label }: any) => {
  return <button className={wrapper}>{label}</button>;
};

export default LoginButton;
