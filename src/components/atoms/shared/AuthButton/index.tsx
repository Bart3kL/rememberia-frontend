import { Fragment } from "react";

import { AuthButtonProps } from "./types";
import { Icons } from "../../../../shared";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const AuthButton = ({ label, onClick, isLoading }: AuthButtonProps) => {
  return (
    <button className={wrapper} onClick={onClick}>
      {isLoading ? (
        <Icons.SpinnerSVG />
      ) : (
        <Fragment>
          <Icons.GoogleSVG /> <p> {label}</p>
        </Fragment>
      )}
    </button>
  );
};

export default AuthButton;
