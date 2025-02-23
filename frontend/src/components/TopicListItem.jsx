import "../styles/TopicListItem.scss";

/**
 * TopicListItem Component - Represents an individual topic in the navigation bar.
 *
 * @param {string} title - The display title of the topic
 */
const TopicListItem = ({ title, topicId, fetchPhotosByTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(topicId)}>
      {/* Display the topic title */}
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
