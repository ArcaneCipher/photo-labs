import { useReducer } from "react";
import photos from "../mocks/photos"; // Mock data
import topics from "../mocks/topics"; // Mock data

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

// Define initial state as a separate constant
const initialState = {
  photos: photos,
  topics: topics,
  favPhotos: {},
  selectedPhoto: null,
};

// Reducer function to manage state transitions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      return {
        ...state,
        favPhotos: {
          ...state.favPhotos,
          [action.payload.photoId]: true, // Add photo to favorites
        },
      };
    }

    case ACTIONS.FAV_PHOTO_REMOVED: {
      const updatedFavPhotos = { ...state.favPhotos };
      delete updatedFavPhotos[action.payload.photoId]; // Remove photo from favorites
      return { ...state, favPhotos: updatedFavPhotos };
    }

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload.photos };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload.topics };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, selectedPhoto: action.payload.photo };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

/**
 * Custom Hook - Manages application state using useReducer.
 *
 * @returns {Object} Application state and action handlers.
 */
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Toggles a photo's favorite status.
   * @param {number} photoId - ID of the photo to toggle.
   */
  const updateToFavPhotoIds = (photoId) => {
    if (state.favPhotos[photoId]) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  /**
   * Handles photo selection, setting it in the modal.
   * @param {Object} photo - The selected photo object.
   */
  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  /**
   * Closes the photo details modal.
   */
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: null } });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
