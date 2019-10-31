import React from "react";
import "./Collection.scss";

const Collection = props => {

  const images = props.images.map(image => {
    return (
      <div className="collection__images">
        <img
          key={image.id}
          src={image.largeImageURL}
          width="100%"
        />
      </div>
    );
  });

  console.log(props.images);

  return (
    <div className="collection">
      <div className="collection__header">My Collection</div>
      {images}
    </div>);
};

export default Collection;