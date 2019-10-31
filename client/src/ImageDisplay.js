import React from "react";
import './ImageDisplay.scss';

// props.images.largeImageURL

const ImageDisplay = props => {

  var onButtonClick = (imageClicked) => {
    props.onClick(imageClicked);
  }

  const images = props.images.map(image => {
    return (
      <div className="image-display__images">
        <img
          key={image.id}
          src={image.largeImageURL}
          width="100%"
        />
        <button className="image-display__button" onClick={() => {onButtonClick(image)}}><i class="icon ion-md-add" ></i></button>
      </div>
    );
  });

  //console.log(props.images);

  return (
    <div className="image-display">
      <div className="image-display__header">Search Results</div>
      {images}
    </div>
  );
};

export default ImageDisplay;
