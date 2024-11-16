import React from "react";
import Video from "../../components/Video";
// import "../../components/Video.css";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

const AgroVideo = () => {
  const url = "https://www.youtube.com/embed/rvET4ADE8JQ";

  return (
    <>
      <Video
        videoUrl={url}
        prevRoute={"/agriculture/intro"}
        nextRoute={"/agriculture/tips"}
      />
    </>
  );
};

export default AgroVideo;
