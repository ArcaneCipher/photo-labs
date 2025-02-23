import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Root application component
const App = () => {
  // Extract state and actions from the custom hook
  const {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      {/* Main home route that displays the photo list and navigation */}
      <HomeRoute
        state={state}
        toggleFavorite={updateToFavPhotoIds}
        setSelectedPhoto={onPhotoSelect}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {/* Render the photo details modal only if a photo is selected */}
      {state.selectedPhoto && (
        <PhotoDetailsModal
          state={state}
          closeModal={onClosePhotoDetailsModal} // Function to close the modal
          toggleFavorite={updateToFavPhotoIds} // Pass function to toggle favorites
          setSelectedPhoto={onPhotoSelect} // Allow selection of similar photos inside the modal
        />
      )}
    </div>
  );
};

export default App;
