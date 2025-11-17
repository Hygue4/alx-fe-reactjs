import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Filter recipes to get only favorited ones
  const favoriteRecipes = favorites
    .map((favoriteId) => recipes.find((recipe) => recipe.id === favoriteId))
    .filter((recipe) => recipe !== undefined); // Remove undefined recipes

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet. Add some recipes to your favorites!</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
            }}
          >
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
