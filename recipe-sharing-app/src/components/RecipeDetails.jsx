import useRecipeStore from "./components/recipeStore";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoriteButton from "./components/FavoriteButton";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import FavoritesList from "./components/FavouritesList";
import RecommendationsList from "./components/RecommendationsList";


const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <FavoriteButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;