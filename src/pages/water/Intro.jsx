import React from "react";
import "./Intro.css";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Intro = () => {
  return (
    <section id="intro">
      <Link className="button" to={"/"}>
        <FaArrowAltCircleLeft size={30} />
      </Link>

      <div className="container">
        <h2 className="title inconsolata-title">A importância da água</h2>

        <div className="info-container">
          <p className="info inconsolata-text">
            A água é essencial para a vida e um direito fundamental de todos. No
            entanto, milhões de pessoas ainda carecem de acesso à água potável e
            ao saneamento básico. O ODS 6 da ONU destaca a importância de
            garantir água limpa e saneamento para todos, pois a ausência desses
            recursos compromete a saúde, a educação e a qualidade de vida,
            principalmente das comunidades mais vulneráveis.
          </p>
          <p className="info inconsolata-text">
            Além de promover o bem-estar, a preservação e o uso sustentável da
            água são fundamentais para proteger nossos ecossistemas e construir
            um futuro mais saudável e justo para todos. O manejo inadequado da
            água pode levar à degradação ambiental, afetando a biodiversidade e
            exacerbando as mudanças climáticas. Portanto, é crucial adotarmos
            práticas que assegurem a conservação dos recursos hídricos e
            incentivem o uso consciente da água.
          </p>
        </div>
      </div>

      <Link className="button" to={"/water/video"}>
        <FaArrowAltCircleRight size={30} />
      </Link>
    </section>
  );
};

export default Intro;
