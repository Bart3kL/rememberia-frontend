import { AuthLinkProps } from "../../../atoms/shared/AuthLink/types";
import { AuthButtonProps } from "../../../atoms/shared/AuthButton/types";

export type HeaderProps = {
  login: AuthLinkProps;
  register: AuthLinkProps;
  buttons: AuthButtonProps[];
};

export type FormProps = {
  email: {
    label: string;
    pleaceholder: string;
    remindPasswordLabel?: string;
  };
  password: {
    label: string;
    pleaceholder: string;
    remindPasswordLabel?: string;
  };
  username?: {
    label: string;
    pleaceholder: string;
    remindPasswordLabel?: string;
  };
  acceptTerms: string;
  orEmaillabel: string;
  buttonLabel: string;
};
