import { useState } from "react";
import useRecipeStore from "./components/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    event.preventDefault(); // ✅ this line is required
    updateRecipe(recipe.id, formData);
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        style={{ display: "block", margin: "10px 0", padding: "8px" }}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        style={{ display: "block", margin: "10px 0", padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 15px" }}>
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;


