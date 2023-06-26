import { AuthBannerProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const AuthBanner = ({ description, backgroundImage }: AuthBannerProps) => {
  return (
    <section
      className={wrapper}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h4>{description}</h4>
    </section>
  );
};

export default AuthBanner;
