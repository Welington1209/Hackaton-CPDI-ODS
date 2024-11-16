import React from "react";

import HomeSection from "../../components/HomeSection";
import homeData from "../../data/homeData";
const { prevRoute, nextRoute, imageSrc, paragraphs } = homeData.agroHome;

import Img from "../../img/ecology-green.svg";

const AgroHome = () => {
  return (
    <HomeSection
      prevRoute={prevRoute}
      nextRoute={nextRoute}
      imageSrc={Img}
      paragraphs={paragraphs}
    />
  );
};

export default AgroHome;
