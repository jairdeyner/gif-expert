import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="container">
      {category !== "" && (
        <h2 className="gif_name animate__animated animate__fadeIn">
          {category}
        </h2>
      )}

      {loading && <p className="animate__animated animate__flash">Loading..</p>}

      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 640: 3, 750: 4 }}>
        <Masonry gutter="10px">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GifGrid;
