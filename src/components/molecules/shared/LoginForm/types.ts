import { AuthLinkProps } from "../../../atoms/shared/AuthLink/types";
import { AuthButtonProps } from "../../../atoms/shared/AuthButton/types";

export interface AuthHeaderProps {
  login: AuthLinkProps;
  register: AuthLinkProps;
  buttons: AuthButtonProps[];
}
