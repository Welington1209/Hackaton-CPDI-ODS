import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const HomeSection = ({ 
  prevRoute, 
  nextRoute, 
  imageSrc, 
  paragraphs 
}) => {
  return (
    <section>
      <div className="agro-container">
        <Link className="button" to={prevRoute}>
          <FaArrowAltCircleLeft size={30} />
        </Link>
        <div>
          <div className="container-control">
            <div className="container-home">
              <img src={imageSrc} alt="Imagem do planeta terra" />
            </div>

            <div className="container-home">
              {paragraphs.map((paragraph, index) => (
                <p className="paragraph" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link className="button" to={nextRoute}>
          <FaArrowAltCircleRight size={30} />
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
