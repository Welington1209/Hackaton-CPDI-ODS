import React from "react";
import Tips from "../../components/Tips";
import agroTipsData from "../../data/agroTipsData";

const AgroTipsPage = () => {
  return (
    <Tips
      tipsData={agroTipsData}
      prevRoute="/water/video"
      nextRoute="/agriculture/quiz"
    />
  );
};

export default AgroTipsPage;
