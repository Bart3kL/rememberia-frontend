import { AuthLoginProps } from "../../loginPage/AuthLogin/types";

import AuthHeader from "../../../molecules/shared/AuthHeader";
import Form from "../../../molecules/registerPage/Form";
import { useAuthGoogle } from "./../../../../lib/hooks/useAuthGoogle";
import AuthButton from "../../../atoms/shared/AuthButton";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLine, wrapperForm, wrapperGoogleAuth } = styles;

const AuthRegister = ({ header, form }: AuthLoginProps) => {
  const { register, isLoading } = useAuthGoogle();

  return (
    <section className={wrapper}>
      <AuthHeader {...header} />
      <div className={wrapperGoogleAuth}>
        <AuthButton
          label="Kontunuuj przez Google"
          onClick={() => register()}
          isLoading={isLoading}
        />
      </div>
      <div className={wrapperLine}>{form.orEmaillabel}</div>
      <div className={wrapperForm}>
        <Form {...form} />
      </div>
    </section>
  );
};

export default AuthRegister;
