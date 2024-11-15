import React from "react";

const TipItem = ({ title, paragraphs, imgSrc, imgAlt }) => {
  return (
    <li>
      <div>
        <h3>{title}</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <img src={imgSrc} alt={imgAlt} />
    </li>
  );
};

export default TipItem;
