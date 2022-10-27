import useFavoriteContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesMeetups = () => {
  const { favorites } = useFavoriteContext();

  let content;

  if (favorites.length > 0) {
    content = <MeetupList meetups={favorites} />;
  } else {
    content = <p>We don't have any favorite meetup yet</p>;
  }

  return (
    <>
      <h1>Favorites Meetups</h1>
      {content}
    </>
  );
};

export default FavoritesMeetups;
