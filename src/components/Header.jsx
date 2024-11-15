import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Logo from "../img/ecology-green-logo.svg";

const Header = () => {
  return (
    <header id="header">
      <Link className="logo-img" to={"/"}>
        <img src={Logo} alt="imagem do planeta terra" />
      </Link>
      <nav>
        <Link to={"/"} className="link-control">
          <h2>Home</h2>
        </Link>

        <Link to="/agriculture/quiz" className="link-control">
          <h2>Quiz</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
