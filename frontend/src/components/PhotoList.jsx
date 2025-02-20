import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"; // Import the mock data

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photoItem) => (
      <PhotoListItem
        key={photoItem.id}
        photo={photoItem.urls.regular}
        username={photoItem.user.name}
        profile={photoItem.user.profile}
        location={photoItem.location}
      />
      ))}
    </ul>
  );
};

export default PhotoList;
