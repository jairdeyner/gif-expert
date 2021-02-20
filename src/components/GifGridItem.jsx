import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <img
      className="card-grid-item grid-item card animate__animated animate__fadeIn"
      src={url}
      alt={title}
    />
  );
};

export default GifGridItem;
