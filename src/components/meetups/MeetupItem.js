import Card from '../UI/Card';
import classes from './MeetupItem.module.css';
import useFavoriteContext from '../../store/favorites-context';

const MeetupItem = ({ title, image, address, description, id }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoriteContext();
  const isMeetupFavorite = isFavorite(id);

  const toggleFavorite = () => {
    if (isMeetupFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        title,
        image,
        address,
        description,
        id,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {isMeetupFavorite ? 'Remove From Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
