// src/components/FavoriteButton.jsx
import useRecipeStore from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();
  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: isFavorite ? "gold" : "#eee",
        border: "1px solid #ccc",
        padding: "5px 10px",
        marginLeft: "10px",
        cursor: "pointer",
      }}
    >
      {isFavorite ? "★ Favorite" : "☆ Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
