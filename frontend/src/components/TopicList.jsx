import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

/**
 * TopicList Component - Displays a list of topics in the navigation bar.
 *
 * @param {Array} topics - Array of topic objects, each containing:
 *   @param {number} topics.id - Unique identifier for the topic
 *   @param {string} topics.slug - Slug used for navigation or filtering
 *   @param {string} topics.title - Display title of the topic
 */
const TopicList = ({ topics, fetchPhotosByTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Map through topics and render individual TopicListItem components */}
      {topics.map((topicItem) => (
        <TopicListItem
          key={topicItem.id} // Ensure unique key for React rendering
          topicId={topicItem.id}
          slug={topicItem.slug}
          title={topicItem.title}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
