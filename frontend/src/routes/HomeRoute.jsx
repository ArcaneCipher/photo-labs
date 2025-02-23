import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

/**
 * HomeRoute Component - Represents the main homepage layout.
 * It includes the top navigation bar and the list of photos.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.state - Application state containing photos, topics, favorites, etc.
 * @param {Function} props.toggleFavorite - Function to toggle favorite status of a photo.
 * @param {Function} props.setSelectedPhoto - Function to set the currently selected photo for the modal.
 */
const HomeRoute = ({
  state,
  toggleFavorite,
  setSelectedPhoto,
  fetchPhotosByTopic,
}) => {
  return (
    <div className="home-route">
      {/* Render the top navigation bar, passing topics and favorite status */}
      <TopNavigation
        topics={state.topics}
        isFavPhotoExist={Object.values(state.favPhotos).some(Boolean)} // Check if any photo is favorited
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {/* Render the list of photos, passing necessary props */}
      <PhotoList
        photos={state.photos}
        favPhotos={state.favPhotos}
        toggleFavorite={toggleFavorite}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
