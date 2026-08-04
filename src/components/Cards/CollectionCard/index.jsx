import "./collectionCard.scss";

const CollectionCard = ({ image, title, onClick }) => (
  <div className="collectionCard" onClick={onClick}>
    <img src={image} alt={title} className="collection-image" />
    <div className="collection-text">
      <p>{title}</p>
      
      
    </div>
  </div>
);

export default CollectionCard;
