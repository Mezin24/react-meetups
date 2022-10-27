import { useContext, createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(storedFavorites || []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (meetup) => {
    setFavorites((prev) => [...prev, meetup]);
  };

  const removeFromFavorites = (meetupId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== meetupId));
  };

  const isFavorite = (meetupId) =>
    favorites.some((item) => item.id === meetupId);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        totalFavorites: favorites.length,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavoriteContext = () => useContext(FavoritesContext);

export default useFavoriteContext;
