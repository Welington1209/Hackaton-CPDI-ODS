import React from "react";
import "./Video.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Video = ({ videoUrl, prevRoute, nextRoute }) => {

  return (
    <section id="video">
      <Link className="button" to={prevRoute}>
        <FaArrowAltCircleLeft size={30} />
      </Link>
      <iframe
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <Link className="button" to={nextRoute}>
        <FaArrowAltCircleRight size={30} />
      </Link>
    </section>
  );
};

export default Video;
