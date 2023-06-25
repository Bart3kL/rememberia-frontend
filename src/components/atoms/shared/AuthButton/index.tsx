import { AuthButtonProps } from "./types";
import { chooseIcon } from "./utils";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const AuthButton = ({ icon, label }: AuthButtonProps) => {
  return (
    <button className={wrapper}>
      {chooseIcon(icon)}
      <p> {label}</p>
    </button>
  );
};

export default AuthButton;
