import { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
