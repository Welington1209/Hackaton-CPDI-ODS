import React from "react";
import { Outlet } from "react-router-dom";
import "../Home.css";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import Img from "../../img/ecology-green.svg";

const AgroHome = () => {
  return (
    <section>
      <div className="agro-container">
        <Link className="button" to={"/water/tips"}>
          <FaArrowAltCircleLeft size={30} />
        </Link>
        <div>
          <div className="container-control">
            <div className="container-home">
              <img src={Img} alt="" />
            </div>

            <div className="container-home">
              <p className="paragraph">
                No ODS 2 - Fome Zero e Agricultura Sustentável, exploramos como
                pequenas escolhas no nosso dia a dia podem ajudar a combater a
                fome e promover uma alimentação saudável para todos.
              </p>

              <p className="paragraph">
                O apoio à agricultura sustentável, o combate ao desperdício e o
                incentivo ao consumo consciente são ações simples que impactam
                de forma positiva toda a cadeia alimentar.
              </p>

              <p className="paragraph">
                Ao final da leitura, você poderá testar seus conhecimentos em um
                questionário interativo, descobrindo novas maneiras de
                contribuir para um futuro sem fome e mais justo. Vamos juntos
                nessa jornada!
              </p>
            </div>
          </div>
        </div>

        <Link className="button" to={"/agriculture/intro"}>
          <FaArrowAltCircleRight size={30} />
        </Link>
      </div>
    </section>
  );
};

export default AgroHome;
