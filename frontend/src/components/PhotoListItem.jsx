import React, { useState } from 'react';
import "../styles/PhotoListItem.scss";

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const PhotoListItem = () => {
  return (
    <div className="photo-list-item">
      <img src={sampleDataForPhotoListItem.urls.regular} alt="Photo" className="photo" />
      <div className="photo-details">
        <img src={sampleDataForPhotoListItem.user.profile} alt="Photographer" className="profile-img" />
        <div className="photographer-info">
          <p className="photographer-name">{sampleDataForPhotoListItem.user.name}</p>
          <p className="photographer-location">{sampleDataForPhotoListItem.location.city} {sampleDataForPhotoListItem.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;


/* 
import React from 'react';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


const PhotoListItem = () => {
  // Component Code
}

export default PhotoListItem
*/