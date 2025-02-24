import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

/**
 * PhotoList Component - Renders a list of photo items.
 *
 * @param {Array} photos - List of photo objects to be displayed
 * @param {Object} favPhotos - Object tracking favorite photos by their IDs
 * @param {Function} toggleFavorite - Function to toggle favorite status of a photo
 * @param {Function} setSelectedPhoto - Function to update the selected photo (for modal display)
 */
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
          isFavorited={favPhotos[photoItem.id] || false} // Check if the photo is in the favorite list
          toggleFavorite={() => toggleFavorite(photoItem.id)} // Toggle favorite state for this photo
          setSelectedPhoto={() => 
            setSelectedPhoto({
              ...photoItem,
              similar_photos: photoItem.similar_photos || [],
            })
          } // Set this photo as the selected one for the modal
        />
      ))}
    </ul>
  );
};

export default PhotoList;
