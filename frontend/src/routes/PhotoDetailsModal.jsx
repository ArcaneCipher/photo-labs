import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  selectedPhoto,
  closeModal,
  similarPhotos,
  toggleFavorite,
  favPhotos,
  setSelectedPhoto,
}) => {
  if (!selectedPhoto) return null;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="Close modal" />
      </button>

      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__images">
          <PhotoFavButton
            isFavorited={favPhotos[selectedPhoto.id] || false}
            toggleFavorite={(event) => {
              event.stopPropagation(); // Prevents closing modal when clicking
              toggleFavorite(selectedPhoto.id);
            }}
          />
          <img
            src={selectedPhoto.urls.full}
            alt={`Full view of ${selectedPhoto.user.name}'s photo`}
            className="photo-details-modal__image"
          />

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

          {similarPhotos.length > 0 && (
            <>
              <div className="photo-details-modal__header">Similar Photos</div>
              <PhotoList
                photos={similarPhotos}
                favPhotos={favPhotos}
                toggleFavorite={toggleFavorite}
                setSelectedPhoto={setSelectedPhoto}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
