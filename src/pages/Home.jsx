import React from "react";
import {
  Header,
  Reasons,
  FeatureList,
  WorkList,
  Banner,
  ProcessList,
  FAQs,
} from "../hooks/index";

function Home() {
  return (
    <>
      <Header />
      <Reasons />
      <FeatureList />
      <WorkList />
      <Banner />
      <ProcessList />
      <FAQs />
    </>
  );
}

export default Home;
