import { useLoaderData } from "react-router-dom";

import Header from "../../components/sections/shared/header";

const HomePage = () => {
  const { header } = useLoaderData() as any;

  return (
    <>
      <Header header={header.fields} />
    </>
  );
};

export default HomePage;
