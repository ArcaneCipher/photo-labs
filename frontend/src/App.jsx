import "./App.scss";
import { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Import the mock data
import photos from "./mocks/photos";
import topics from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]); // Global state for favorited photos
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for modal

  // Function to toggle favorite status
  const toggleFavorite = (photoId) => {
    setFavPhotos((prevFavPhotos) => ({
      ...prevFavPhotos,
      [photoId]: !prevFavPhotos[photoId], // Toggle true/false for each photoId
    }));
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        setSelectedPhoto={setSelectedPhoto}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={() => setSelectedPhoto(null)} // Function to close modal
        />
      )}
    </div>
  );
};

export default App;
