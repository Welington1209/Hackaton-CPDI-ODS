import React from "react";
import Video from "../../components/Video";

const WaterVideo = () => {
  const url = "https://www.youtube.com/embed/ydH9YpoxpsI";
  return (
    <>
      <Video
        videoUrl={url}
        prevRoute={"/water/intro"}
        nextRoute={"/water/tips"}
      />
    </>
  );
};

export default WaterVideo;
