import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Logo from "../img/ecology-green-logo.svg";

const Header = () => {
  return (
    <header id="header">
      <div className="logo-container">
        <Link className="logo-img" to={"/"}>
          <img src={Logo} alt="imagem do planeta terra" />
        </Link>

        <h1 className="inconsolata-title">Espaço ODS</h1>
      </div>
      <nav>
        <Link to={"/"} className="link-control inconsolata-title">
          <h2>Home</h2>
        </Link>

        <Link to="/agriculture/quiz" className="link-control inconsolata-title">
          <h2>Quiz</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
