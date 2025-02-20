import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={true} /> {/* this value would likely come from a state or prop, indicating whether there are any favorite photos. */}
    </div>
  )
};

export default TopNavigation;
