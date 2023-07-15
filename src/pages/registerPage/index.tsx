import { useLoaderData } from "react-router-dom";

import { RegisterPageProps } from "./types";

import AuthBanner from "../../components/sections/shared/AuthBanner";
import AuthRegister from "../../components/sections/registerPage/AuthRegister";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const RegisterPage = () => {
  const { banner, header, form } = useLoaderData() as RegisterPageProps;

  return (
    <main className={wrapper}>
      <AuthBanner {...banner.fields} />
      <AuthRegister header={header.fields} form={form} />
    </main>
  );
};

export default RegisterPage;
