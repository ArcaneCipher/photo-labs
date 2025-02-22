import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

/**
 * PhotoFavButton Component - Represents a clickable favorite button for photos.
 * Allows users to mark/unmark photos as favorites.
 *
 * @param {boolean} isFavorited - Indicates whether the photo is currently marked as a favorite
 * @param {Function} toggleFavorite - Function to toggle the favorite status of the photo
 */
const PhotoFavButton = ({ isFavorited, toggleFavorite }) => {
  return (
    // Wrapper div that serves as the clickable favorite button
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      {/* Inner container for the favorite icon */}
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
