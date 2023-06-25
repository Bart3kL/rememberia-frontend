import { cx } from "../../../../lib/utils";

import { SlideProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const AuthBanner = ({ description, backgroundImage }: any) => {
  return <section className={wrapper}></section>;
};

export default AuthBanner;
