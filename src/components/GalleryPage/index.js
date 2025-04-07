import React, { Component } from "react";

import GalleryItem from "../GalleryItem";

import "./index.css";

const imagesList = [
  {
    id: 0,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",
    imageAltText: "nature mountain with pond",
    thumbnailAltText: "nature mountain with pond thumbnail",
  },
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",
    imageAltText: "nature sunset",
    thumbnailAltText: "nature sunset thumbnail",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",
    imageAltText: "nature mountain with ocean",
    thumbnailAltText: "nature mountain with ocean thumbnail",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",
    imageAltText: "nature mountain with forest",
    thumbnailAltText: "nature mountain with forest thumbnail",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",
    imageAltText: "nature leaves",
    thumbnailAltText: "nature leaves thumbnail",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",
    imageAltText: "nature tree",
    thumbnailAltText: "nature tree thumbnail",
  },
  {
    id: 6,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",
    imageAltText: "nature waterfall",
    thumbnailAltText: "nature waterfall thumbnail",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",
    imageAltText: "nature river",
    thumbnailAltText: "nature river thumbnail",
  },
];

class GalleryPage extends Component {
  state = {
    activeTabId: imagesList[0].id,
  };

  setActiveTab = (id) => {
    this.setState({ activeTabId: id });
  };

  render() {
    const { activeTabId } = this.state;
    const { imageUrl, imageAltText } = imagesList[activeTabId];
    return (
      <div className="main-container">
        <img src={imageUrl} alt={imageAltText} className="img" />
        <div className="item-container">
          <p className="heading">Nature Photography</p>
          <p className="sub-heading">Nature Photography by Praveen</p>
          <ul className="img-folder">
            {imagesList.map((eachImg) => (
              <GalleryItem
                key={eachImg.id}
                imgDetails={eachImg}
                setActiveTab={this.setActiveTab}
                isActive={activeTabId === eachImg.id}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default GalleryPage;
