import { useLoaderData } from "react-router-dom";

import Header from "../../components/sections/shared/header";
import MainSection from "../../components/sections/homePage/mainSection";

const HomePage = () => {
  const { header, mainSection } = useLoaderData() as any;
  console.log(mainSection);
  return (
    <>
      <Header header={header.fields} />
      <MainSection {...mainSection} />
    </>
  );
};

export default HomePage;
