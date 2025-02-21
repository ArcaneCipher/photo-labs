import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ selectedPhoto, closeModal }) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <h2>Photo Details Modal</h2>
      <p>Photo ID: {selectedPhoto.id}</p>
    </div>
  );
};

export default PhotoDetailsModal;
