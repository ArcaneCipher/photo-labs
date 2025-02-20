import "../styles/HomeRoute.scss";
import { useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ topics, photos }) => { // Accept props from App.jsx
  const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favPhotos.length > 0} /> {/* Pass topics to TopNavigation */}
      <PhotoList photos={photos} /> {/* Pass photos to PhotoList */}
    </div>
  );
};

export default HomeRoute;
