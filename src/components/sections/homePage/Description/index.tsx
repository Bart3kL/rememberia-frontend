import { DescriptionProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const Description = ({ description }: DescriptionProps) => {
  return (
    <section
      className={wrapper}
      dangerouslySetInnerHTML={{ __html: description }}
    ></section>
  );
};

export default Description;
