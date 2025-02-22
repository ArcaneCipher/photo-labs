import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

/**
 * PhotoListItem Component - Represents an individual photo item with its details.
 *
 * @param {string} photo - URL of the photo to be displayed
 * @param {string} username - Name of the photographer
 * @param {string} profile - URL of the photographer's profile image
 * @param {Object} location - Object containing city and country information
 * @param {boolean} isFavorited - Indicates if the photo is marked as a favorite
 * @param {Function} toggleFavorite - Function to toggle favorite status of the photo
 * @param {Function} setSelectedPhoto - Function to set the selected photo (for modal display)
 */
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
    <div className="photo-list__item">
      {/* Favorite button to allow users to like/unlike the photo */}
      <PhotoFavButton
        isFavorited={isFavorited}
        toggleFavorite={toggleFavorite}
      />

      {/* Clickable photo to open the detailed view in a modal */}
      <img
        src={photo}
        alt={`Photo taken by ${username}`}
        className="photo-list__image"
        onClick={setSelectedPhoto}
      />

      {/* Photographer details section */}
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
