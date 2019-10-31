import React from "react";
import SearchBar from "./SearchBar";
import ImageDisplay from "./ImageDisplay";
import Collection from "./Collection";
import "./App.scss";
import axios from "axios";

var API_KEY = "************   PASTE API KEY HERE  ************";

class App extends React.Component {
  state = { images: [], addImages: [] };

  onSearchSubmit = async keyword => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        keyword
      )}&image_type=photo`
    );

    this.setState({ images: response.data.hits });
  };

  onButtonClick = image => {
    console.log(image);
    console.log(this.state.addImages);
    this.state.addImages.push(image);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="treasured-app">
        <div className="treasured-app__header">
          <div className="treasured-app__header__logo">
            <h1>Treasured App</h1>
          </div>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="treasured-app__main">
          <ImageDisplay
            images={this.state.images}
            onClick={this.onButtonClick}
          />
          <Collection images={this.state.addImages} />
        </div>
      </div>
    );
  }
}

export default App;
