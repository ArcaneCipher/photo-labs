import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ topics, photos, favPhotos, toggleFavorite }) => { // Accept props from App.jsx

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={Object.values(favPhotos).some(Boolean)} /> {/* Pass topics to TopNavigation */}
      <PhotoList photos={photos} favPhotos={favPhotos} toggleFavorite={toggleFavorite} /> {/* Pass photos to PhotoList */}
    </div>
  );
};

export default HomeRoute;
