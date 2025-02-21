import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  username,
  profile,
  location,
  isFavorited,
  toggleFavorite,
  setSelectedPhoto,
}) => {
  return (
    <div className="photo-list__item" onClick={() => setSelectedPhoto(photo)}>
      <PhotoFavButton
        isFavorited={isFavorited}
        toggleFavorite={toggleFavorite}
      />
      <img
        src={photo}
        alt={`Photo taken by ${username}`}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={profile}
          alt={`Profile picture of ${username}`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div className="photo-list__user-name">{username}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
