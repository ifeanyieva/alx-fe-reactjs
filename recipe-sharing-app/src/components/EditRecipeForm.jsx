import { useState } from "react";
import useRecipeStore from "./components/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const editRecipe = useRecipeStore((state) => state.editRecipe);

  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editRecipe(recipe.id, formData);
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Edit title"
        style={{ display: "block", marginBottom: "10px" }}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Edit description"
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;