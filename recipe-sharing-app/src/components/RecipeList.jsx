import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      {recipes.map((recipe) => (
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
          <FavoriteButton recipeId={recipe.id} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
