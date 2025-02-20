import "./App.scss";
import { useState } from "react";
import HomeRoute from "./routes/HomeRoute";

// Import the mock data
import photos from "./mocks/photos";
import topics from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]); // Global state for favorited photos

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
      />
    </div>
  );
};

export default App;
