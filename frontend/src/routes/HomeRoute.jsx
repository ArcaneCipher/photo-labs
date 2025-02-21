import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  topics,
  photos,
  favPhotos,
  toggleFavorite,
  setSelectedPhoto,
}) => {
  // Accept props from App.jsx

  return (
    <div className="home-route">
      {/* Pass topics to TopNavigation */}
      <TopNavigation
        topics={topics}
        isFavPhotoExist={Object.values(favPhotos).some(Boolean)}
      />{" "}
      {/* Pass photos to PhotoList */}
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        setSelectedPhoto={setSelectedPhoto}
      />{" "}
    </div>
  );
};

export default HomeRoute;
