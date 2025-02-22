import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

/**
 * HomeRoute Component - Represents the main homepage layout.
 * It includes the top navigation bar and the list of photos.
 * 
 * @param {Array} topics - List of topics for the navigation bar
 * @param {Array} photos - List of photo objects to display
 * @param {Object} favPhotos - Object tracking favorite photos by their IDs
 * @param {Function} toggleFavorite - Function to toggle favorite status of a photo
 * @param {Function} setSelectedPhoto - Function to set the currently selected photo for the modal
 */
const HomeRoute = ({
  topics,
  photos,
  favPhotos,
  toggleFavorite,
  setSelectedPhoto,
}) => {
  return (
    <div className="home-route">
      {/* Render the top navigation bar, passing topics and favorite status */}
      <TopNavigation
        topics={topics}
        isFavPhotoExist={Object.values(favPhotos).some(Boolean)} // Check if any photo is favorited
      />

      {/* Render the list of photos, passing necessary props */}
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
