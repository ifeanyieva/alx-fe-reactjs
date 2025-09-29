import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavouritesList";
import RecommendationsList from "./components/RecommendationsList";


function App() {
  return (
    <Router>
      <Routes>
        {/* Recipe list */}
        <Route path="/" element={<RecipeList />} />
        <SearchBar />
      <RecipeList />
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />

        {/* Recipe details (dynamic route) */}
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
