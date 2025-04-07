import "./index.css";

const GalleryItem = (props) => {
  const { imgDetails, setActiveTab, isActive } = props;
  const { imageUrl, altName, id } = imgDetails;

  const isActiveTanClassName = isActive ? "button active" : "button";

  const onClick = () => {
    setActiveTab(id);
  };

  return (
    <div className="item-container">
      <button className={isActiveTanClassName} onClick={onClick}>
        <img src={imageUrl} alt={altName} className="image" />
      </button>
    </div>
  );
};

export default GalleryItem;
