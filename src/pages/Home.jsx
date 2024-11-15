import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import Img from "../img/ecology-green-svgrepo-com.svg";

const Home = () => {
  return (
    <section id="home" className="content">
      <Link className="button disabled" to={"/"}>
        <FaArrowAltCircleLeft size={30} />
      </Link>
      <div>
        <h2 className="title">
          Seja bem-vindo ao nosso espaço dedicado aos Objetivos de
          Desenvolvimento Sustentável!
        </h2>

        <div className="container-control">
          <div className="container-home">
            <img src={Img} alt="" />
          </div>

          <div className="container-home">
            <p className="paragraph">
              Aqui, mergulhamos no ODS 6 - Água Potável e Saneamento, um tema
              essencial para a saúde e a sustentabilidade do planeta.
            </p>

            <p className="paragraph">
              Pequenas ações, como reduzir o desperdício e evitar poluição, são
              fundamentais para proteger nossos rios e aquíferos, além de
              melhorar o saneamento e a qualidade de vida.
            </p>

            <p className="paragraph">
              Ao final, participe de um questionário interativo e teste seu
              conhecimento sobre o tema. Descubra como contribuir para um futuro
              onde todos tenham acesso à água potável. Vamos juntos cuidar do
              nosso bem mais precioso!"
            </p>
          </div>
        </div>
      </div>

      <Link className="button" to={"/water/intro"}>
        <FaArrowAltCircleRight size={30} />
      </Link>
    </section>
  );
};

export default Home;
