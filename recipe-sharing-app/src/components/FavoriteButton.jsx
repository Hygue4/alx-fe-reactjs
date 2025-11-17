import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  const isFavorite = favorites.includes(recipeId);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
    // Generate new recommendations after favorite change
    generateRecommendations();
  };

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        backgroundColor: isFavorite ? 'gold' : 'gray',
        color: 'white',
        padding: '5px 10px',
        margin: '5px',
      }}
    >
      {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
