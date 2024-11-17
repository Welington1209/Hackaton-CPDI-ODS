import React from "react";
// import "./Intro.css";

import "../water/Intro.css";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const IntroAgro = () => {
  return (
    <section id="intro">
      <Link className="button" to={"/agriculture/home"}>
        <FaArrowAltCircleLeft size={30} />
      </Link>

      <div className="container">
        <h2 className="title inconsolata-title">
          Fome zero e Agricultura sustentável
        </h2>

        <div className="info-container">
          <p className="info inconsolata-text">
            A erradicação da fome é essencial para o desenvolvimento humano e um
            dos grandes objetivos do ODS 2 da ONU. Milhões de pessoas ainda
            enfrentam a insegurança alimentar, sendo fundamental promover
            sistemas alimentares sustentáveis e acessíveis. Garantir uma
            alimentação nutritiva e suficiente para todos é uma prioridade para
            a construção de uma sociedade mais justa e saudável.
          </p>
          <p className="info inconsolata-text">
            Além de combater a fome, o ODS 2 incentiva a agricultura
            sustentável, que valoriza a preservação dos recursos naturais e o
            respeito ao meio ambiente. Práticas agrícolas responsáveis
            contribuem para a segurança alimentar e para a proteção da
            biodiversidade, ajudando a mitigar as mudanças climáticas e
            promovendo uma economia rural mais forte. Ao apoiar esses
            princípios, podemos construir um futuro onde todos tenham acesso a
            alimentos de qualidade.
          </p>
        </div>
      </div>

      <Link className="button" to={"/agriculture/video"}>
        <FaArrowAltCircleRight size={30} />
      </Link>
    </section>
  );
};

export default IntroAgro;
