import { useState } from "react";
import photos from "../mocks/photos"; // Mock data
import topics from "../mocks/topics"; // Mock data

/**
 * Custom Hook - Manages application state and actions.
 *
 * @returns {Object} Application state and action handlers.
 */
const useApplicationData = () => {
  // State for favorite photos
  const [favPhotos, setFavPhotos] = useState({});
  
  // State for selected photo in modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  /**
   * Toggles a photo's favorite status.
   * @param {number} photoId - ID of the photo to toggle.
   */
  const updateToFavPhotoIds = (photoId) => {
    setFavPhotos((prevFavPhotos) => ({
      ...prevFavPhotos,
      [photoId]: !prevFavPhotos[photoId], // Toggle true/false
    }));
  };

  /**
   * Handles photo selection, setting it in the modal.
   * @param {Object} photo - The selected photo object.
   */
  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  /**
   * Closes the photo details modal.
   */
  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  return {
    state: { photos, topics, favPhotos, selectedPhoto },
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
