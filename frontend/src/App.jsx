import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import photos from "./mocks/photos";

const sampleDataForPhotoListItem = [
  {
    id: 1,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: "/Image-1-Regular.jpeg",
    username: "Joe Example",
    profile: "/profile-1.jpg",
  },
  {
    id: 2,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: "/Image-1-Regular.jpeg",
    username: "Joe Example",
    profile: "/profile-1.jpg",
  },
  {
    id: 3,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: "/Image-1-Regular.jpeg",
    username: "Joe Example",
    profile: "/profile-1.jpg",
  }
];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {sampleDataForPhotoListItem.map((sampleDataForPhotoListItem) => (
      <PhotoListItem
        key={sampleDataForPhotoListItem.id}
        imageSource={sampleDataForPhotoListItem.imageSource}
        username={sampleDataForPhotoListItem.username}
        profile={sampleDataForPhotoListItem.profile}
        location={sampleDataForPhotoListItem.location}
      />
      ))}
    </div>
  );
};

export default App;
