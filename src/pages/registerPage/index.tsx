import { useLoaderData } from "react-router-dom";

import AuthBanner from "../../components/sections/shared/AuthBanner";

import styles from "./base.module.scss";
const { wrapper } = styles;

const RegisterPage = () => {
  const { banner } = useLoaderData() as any;

  return (
    <main>
      <AuthBanner {...banner.fields} />
    </main>
  );
};

export default RegisterPage;