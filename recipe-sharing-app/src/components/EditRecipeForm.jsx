import { useState } from "react";
import useRecipeStore from "./recipeStore";

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
    e.preventDefault();
    updateRecipe(recipe.id, formData); // ✅ Now works with updateRecipe
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        style={{ display: "block", margin: "10px 0" }}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        style={{ display: "block", margin: "10px 0" }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
