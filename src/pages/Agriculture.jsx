import React from "react";
import { Outlet } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import Img from "../img/ecology-green-svgrepo-com.svg";

const Agriculture = () => {
  return (
    <section className="content agro">
      <Outlet />
    </section>
  );
};

export default Agriculture;
