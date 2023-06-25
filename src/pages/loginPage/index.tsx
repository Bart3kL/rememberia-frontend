import { useLoaderData } from "react-router-dom";

import AuthBanner from "../../components/sections/shared/AuthBanner";
import Auth from "../../components/sections/loginPage/Auth";

import styles from "./base.module.scss";
const { wrapper } = styles;

const LoginPage = () => {
  const { banner, header } = useLoaderData() as any;
  console.log(header);
  return (
    <main className={wrapper}>
      <AuthBanner {...banner.fields} />
      <Auth header={header.fields} />
    </main>
  );
};

export default LoginPage;
