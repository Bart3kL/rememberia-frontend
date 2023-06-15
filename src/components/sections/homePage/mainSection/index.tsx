import styles from "./rwd.module.scss";
const { wrapper } = styles;

const MainSection = ({ backgroundBlurUrl, backgroundColor }: any) => {
  return (
    <section
      className={wrapper}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundBlurUrl})`,
      }}
    ></section>
  );
};

export default MainSection;
