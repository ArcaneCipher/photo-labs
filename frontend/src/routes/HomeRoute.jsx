import "../styles/HomeRoute.scss";
import { useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = () => {
  const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={favPhotos.length > 0} />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
