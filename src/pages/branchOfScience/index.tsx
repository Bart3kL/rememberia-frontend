import { useLoaderData } from "react-router-dom";

import { BranchOfScienceProps } from "./types";

import Header from "../../components/sections/shared/Header";
import NavigationBar from "../../components/sections/shared/NavigationBar";

import styles from "./base.module.scss";
const { wrapper } = styles;

const BranchOfScience = () => {
  const { subjects, navigationBar, header } =
    useLoaderData() as BranchOfScienceProps;

  return (
    <>
      <Header header={header.fields} />
      <main className={wrapper}>
        <NavigationBar {...navigationBar} />
      </main>
    </>
  );
};

export default BranchOfScience;
