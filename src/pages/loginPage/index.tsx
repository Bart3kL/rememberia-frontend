import { useLoaderData } from "react-router-dom";

import { RegisterPageProps } from "../registerPage/types";

import AuthBanner from "../../components/sections/shared/AuthBanner";
import Auth from "../../components/sections/loginPage/AuthLogin";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const LoginPage = () => {
  const { banner, header, form } = useLoaderData() as RegisterPageProps;

  return (
    <main className={wrapper}>
      <AuthBanner {...banner.fields} />
      <Auth header={header.fields} form={form} />
    </main>
  );
};

export default LoginPage;
