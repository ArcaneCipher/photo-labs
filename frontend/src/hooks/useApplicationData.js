import { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
};

// Define initial state as a separate constant
const initialState = {
  photos: [],
  topics: [],
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

    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return { ...state, photos: action.payload.photos };

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

  // Fetch topics from API
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: data } });
      })
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

  // Fetch photos from API
  useEffect(() => {
    fetch("/api/photos") // Fetching data from backend
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } }); // Dispatch action to store data
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

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
    // Find the selected photo in the existing photos array
    const existingPhoto = state.photos.find(p => p.id === photo.id);
  
    if (existingPhoto) {
      dispatch({ 
        type: ACTIONS.SELECT_PHOTO, 
        payload: { photo: existingPhoto } 
      });
    } else {
      console.error("Photo not found in state.photos. Check if photos have loaded properly.");
    }
  };

  /**
   * Closes the photo details modal.
   */
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: null } });
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/${topicId}/photos`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTOS_BY_TOPIC,
          payload: { photos: data },
        });
      })
      .catch((error) =>
        console.error("Error fetching photos by topic:", error)
      );
  };

  return {
    state,
    fetchPhotosByTopic,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
