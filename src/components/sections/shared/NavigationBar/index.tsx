import { useLocation } from "react-router-dom";

import { NavigationBarProps } from "./types";

import NavigationCircle from "../../../atoms/shared/NavigationCircle";

import styles from "./rwd.module.scss";
const { wrapper, wrapperContent, wrapperLine } = styles;

const NavigationBar = ({ branch }: NavigationBarProps) => {
  const location = useLocation();

  const currentBranchPage = branch.find(
    ({ href }: { href: string }) => href === location.pathname
  );

  return (
    <section className={wrapper}>
      <div className={wrapperContent}>
        <NavigationCircle
          active={currentBranchPage ? true : false}
          number="01"
          title={currentBranchPage?.title}
        />
        <NavigationCircle
          active={false}
          number="02"
          title={currentBranchPage ? "Przedmiot" : ""}
        />
        <NavigationCircle
          active={false}
          number="03"
          title={currentBranchPage ? "Zestaw" : ""}
        />
        <NavigationCircle
          active={false}
          number="04"
          title={currentBranchPage ? "Nauka" : ""}
        />
      </div>
      <div className={wrapperLine} />
    </section>
  );
};

export default NavigationBar;
