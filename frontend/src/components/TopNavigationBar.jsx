import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import SearchBar from "./SearchBar";

/**
 * TopNavigation Component - Represents the navigation bar at the top of the app.
 * Includes the app logo, a list of topics, and a favorite badge notification.
 *
 * @param {Array} topics - Array of topic objects to display in the navigation
 * @param {boolean} isFavPhotoExist - Indicates if any photos have been favorited
 */
const TopNavigation = ({
  topics,
  isFavPhotoExist,
  fetchPhotosByTopic,
  onSearch,
}) => {
  console.log("TopNavigation received onSearch:", onSearch); // Debugging log

  return (
    <div className="top-nav-bar">
      {/* Application Logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* Add SearchBar Here */}
      <SearchBar onSearch={onSearch} />

      {/* Topic List Section */}
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />

      {/* Favorite Badge Indicator */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
