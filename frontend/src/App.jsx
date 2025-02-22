import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Root application component
const App = () => {
  // Extract state and actions from the custom hook
  const {
    state: { photos, topics, favPhotos, selectedPhoto },
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      {/* Main home route that displays the photo list and navigation */}
      <HomeRoute
        topics={topics}
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={updateToFavPhotoIds}
        setSelectedPhoto={onPhotoSelect}
      />

      {/* Render the photo details modal only if a photo is selected */}
      {selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={onClosePhotoDetailsModal} // Function to close the modal
          similarPhotos={Object.values(selectedPhoto.similar_photos|| {})} // Convert similar photos object into an array
          favPhotos={favPhotos} // Pass current favorite photos state
          toggleFavorite={updateToFavPhotoIds} // Pass function to toggle favorites
          setSelectedPhoto={onPhotoSelect} // Allow selection of similar photos inside the modal
        />
      )}
    </div>
  );
};

export default App;
