import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

/**
 * PhotoDetailsModal Component - Displays detailed information about a selected photo.
 * Includes the full-size image, photographer details, and a list of similar photos.
 * 
 * @param {Object} selectedPhoto - The currently selected photo object
 * @param {Function} closeModal - Function to close the modal
 * @param {Array} similarPhotos - List of similar photos to display
 * @param {Function} toggleFavorite - Function to toggle favorite status of a photo
 * @param {Object} favPhotos - Object tracking favorite photos by their IDs
 * @param {Function} setSelectedPhoto - Function to update the selected photo (used for similar photos)
 */
const PhotoDetailsModal = ({
  selectedPhoto,
  closeModal,
  similarPhotos,
  toggleFavorite,
  favPhotos,
  setSelectedPhoto,
}) => {
  if (!selectedPhoto) return null; // Prevent rendering if no photo is selected

  return (
    <div className="photo-details-modal">
      {/* Close button for the modal */}
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close modal" />
      </button>

      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__images">
          
          {/* Favorite button for the selected photo */}
          <PhotoFavButton
            isFavorited={favPhotos[selectedPhoto.id] || false}
            toggleFavorite={(event) => {
              event.stopPropagation(); // Prevents modal from closing when clicking the favorite button
              toggleFavorite(selectedPhoto.id);
            }}
          />

          {/* Display the full-size version of the selected photo */}
          <img
            src={selectedPhoto.urls.full}
            alt={`Full view of ${selectedPhoto.user.name}'s photo`}
            className="photo-details-modal__image"
          />

          {/* Photographer details */}
          <div className="photo-details-modal__photographer-details">
            <img
              src={selectedPhoto.user.profile}
              alt={`${selectedPhoto.user.name}'s profile`}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <div>{selectedPhoto.user.name}</div>
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>

          {/* Display similar photos using PhotoList for consistency */}
          {similarPhotos.length > 0 && (
            <>
              <div className="photo-details-modal__header">Similar Photos</div>
              <PhotoList
                photos={similarPhotos} // Pass similar photos to the PhotoList component
                favPhotos={favPhotos} // Maintain favorite state
                toggleFavorite={toggleFavorite} // Allow favoriting similar photos
                setSelectedPhoto={setSelectedPhoto} // Enable selecting similar photos
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
