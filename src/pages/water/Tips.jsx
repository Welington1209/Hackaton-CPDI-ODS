import React from "react";
import TipItem from "../../components/TipItem";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Tips.css";

const Tips = ({ tipsData, prevRoute, nextRoute }) => {
  return (
    <section id="tips" className="tips-content">
      <Link className="button" to={prevRoute}>
        <FaArrowAltCircleLeft size={30} />
      </Link>

      <div className="info-container">
        <ul>
          {tipsData.map((tip, index) => (
            <TipItem
              key={index}
              title={tip.title}
              paragraphs={tip.paragraphs}
              imgSrc={tip.imgSrc}
              imgAlt={tip.imgAlt}
            />
          ))}
        </ul>
      </div>

      <Link className="button" to={nextRoute}>
        <FaArrowAltCircleRight size={30} />
      </Link>
    </section>
  );
};

export default Tips;
