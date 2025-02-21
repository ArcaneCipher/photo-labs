import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favPhotos, toggleFavorite, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoItem) => (
        <PhotoListItem
          key={photoItem.id}
          photo={photoItem.urls.regular}
          username={photoItem.user.name}
          profile={photoItem.user.profile}
          location={photoItem.location}
          isFavorited={favPhotos[photoItem.id] || false}
          toggleFavorite={() => toggleFavorite(photoItem.id)}
          setSelectedPhoto={(photoItem) => {
            console.log(`Selected Photo: ${photoItem}`);
            setSelectedPhoto(photoItem)
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
