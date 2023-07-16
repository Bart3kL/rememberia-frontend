import { useLoaderData } from "react-router-dom";

import { BranchOfScienceProps } from "./types";

import Header from "../../components/sections/shared/Header";
import NavigationBar from "../../components/sections/shared/NavigationBar";
import Subjects from "../../components/sections/branchOfScience/Subjects";

import styles from "./base.module.scss";
const { wrapper } = styles;

const BranchOfScience = () => {
  const { subjects, navigationBar, header, subjectsLabels } =
    useLoaderData() as BranchOfScienceProps;

  return (
    <>
      <Header header={header.fields} />
      <main className={wrapper}>
        <NavigationBar {...navigationBar} />
        <Subjects subjects={subjects} subjectsLabels={subjectsLabels} />
      </main>
    </>
  );
};

export default BranchOfScience;
