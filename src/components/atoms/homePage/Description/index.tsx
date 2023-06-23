import { DescriptionProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const Description = ({ description }: DescriptionProps) => {
  return (
    <div
      className={wrapper}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
};

export default Description;
