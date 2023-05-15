import { createContext } from "react";
import { useState } from "react";
const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
export function FavoriteContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  function addFavorite(id) {
    setFavoriteIds([id, ...favoriteIds]);
  }
  function removeFavorite(id) {
    setFavoriteIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((ids) => ids !== id)
    );
  }
  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
