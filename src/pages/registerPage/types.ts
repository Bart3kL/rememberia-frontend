import { AuthBannerProps } from "../../components/sections/shared/AuthBanner/types";
import { AuthLoginProps } from "../../components/sections/loginPage/AuthLogin/types";

export interface RegisterPageProps {
  banner: { fields: AuthBannerProps };
  header: { fields: AuthLoginProps["header"] };
  form: AuthLoginProps["form"];
}
