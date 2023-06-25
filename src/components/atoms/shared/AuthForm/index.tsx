import { NavLink } from "react-router-dom";

import { cx } from "../../../../lib/utils";
import { Icons } from "../../../../shared";

import { AuthLinkProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperInput, wrapperDescription } = styles;

const AuthForm = ({ label, pleaceholder, remindPasswordLabel }: any) => {
  return (
    <div className={wrapper}>
      <div className={wrapperInput}>
        <input placeholder={pleaceholder} type="text" id={label} />
      </div>
      <div className={wrapperDescription}>
        <label htmlFor={label}>{label}</label>
        {remindPasswordLabel && <p>{remindPasswordLabel}</p>}
      </div>
    </div>
  );
};

export default AuthForm;
