import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicItem) => (
      <TopicListItem
        key={topicItem.id}
        slug={topicItem.slug}
        title={topicItem.title}
      />
      ))}
    </div>
  );
};

export default TopicList;
