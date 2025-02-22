import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

/**
 * FavBadge Component - Displays a favorite icon with an alert indicator
 * when at least one photo has been favorited.
 *
 * @param {boolean} isFavPhotoExist - Determines if any photos are favorited.
 *                                    If true, the alert is displayed on the icon.
 */
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      {/* Favorite icon with alert indicator if any photo is favorited */}
      <FavIcon displayAlert={isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
