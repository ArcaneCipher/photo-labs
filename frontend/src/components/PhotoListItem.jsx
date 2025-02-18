import React, { useState } from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ imageSource, username, profile, location }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo taken by ${username}`} className="photo" />
      <div className="photo-details">
        <img src={profile} alt={`Profile picture of ${username}`} className="profile-img" />
        <div className="photographer-info">
          <p className="photographer-name">{username}</p>
          <p className="photographer-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
