import "./App.scss";
import { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Import the mock data for photos and topics
import photos from "./mocks/photos";
import topics from "./mocks/topics";

// Root application component
const App = () => {
  // State to track favorited photos
  const [favPhotos, setFavPhotos] = useState([]);

  // State to track the currently selected photo for the modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  /**
   * Toggles the favorite status of a photo
   * @param {number} photoId - The ID of the photo to toggle
   */
  const toggleFavorite = (photoId) => {
    setFavPhotos((prevFavPhotos) => ({
      ...prevFavPhotos,
      [photoId]: !prevFavPhotos[photoId], // Flip the favorite status for the given photo ID
    }));
  };

  return (
    <div className="App">
      {/* Main home route that displays the photo list and navigation */}
      <HomeRoute
        topics={topics}
        photos={photos}
        favPhotos={favPhotos}
        toggleFavorite={toggleFavorite}
        setSelectedPhoto={setSelectedPhoto}
      />

      {/* Render the photo details modal only if a photo is selected */}
      {selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={() => setSelectedPhoto(null)} // Function to close the modal
          similarPhotos={Object.values(selectedPhoto.similar_photos|| {})} // Convert similar photos object into an array
          favPhotos={favPhotos} // Pass current favorite photos state
          toggleFavorite={toggleFavorite} // Pass function to toggle favorites
          setSelectedPhoto={setSelectedPhoto} // Allow selection of similar photos inside the modal
        />
      )}
    </div>
  );
};

export default App;
