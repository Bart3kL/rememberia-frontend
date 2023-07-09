import { useLoaderData } from "react-router-dom";

import { HomePageProps } from "./types";

import Header from "../../components/sections/shared/Header";

import styles from "./base.module.scss";
const { wrapper } = styles;

const BranchOfScience = () => {
  const { header, backgroundStyles } = useLoaderData() as HomePageProps;

  return (
    <>
      <Header header={header.fields} />
      <main className={wrapper}>BranchOfScience</main>
    </>
  );
};

export default BranchOfScience;
