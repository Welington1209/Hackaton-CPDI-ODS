import React from "react";
import waterTipsData from "../../data/waterTipsData";
import Tips from "./Tips";

const WaterTipsPage = () => {
  return (
    <Tips
      tipsData={waterTipsData}
      prevRoute="/water/video"
      nextRoute="/agriculture/home"
    />
  );
};

export default WaterTipsPage;
