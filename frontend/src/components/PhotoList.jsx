import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
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
