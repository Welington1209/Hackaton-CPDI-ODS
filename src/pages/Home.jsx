import React from "react";
import "./Home.css";

import HomeSection from "../components/HomeSection";
import homeData from "../data/homeData";

import Img from "../img/ecology-green-svgrepo-com.svg";

const { prevRoute, nextRoute, paragraphs } = homeData.waterHome;

const Home = () => {
  return (
    <section id="home" className="content">
      <HomeSection
        prevRoute={prevRoute}
        nextRoute={nextRoute}
        paragraphs={paragraphs}
        imageSrc={Img}
      />
    </section>
  );
};

export default Home;
