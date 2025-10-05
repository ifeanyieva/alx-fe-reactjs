import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setMessage("⚠️ Please fill out all fields before submitting.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    console.log("New Recipe Added:", newRecipe);
    setMessage("✅ Recipe added successfully! (Check console for data)");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          📝 Add a New Recipe
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
            >
              Recipe Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter recipe title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 text-sm sm:text-base"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              placeholder="List each ingredient on a new line"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="5"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 text-sm sm:text-base resize-y"
            ></textarea>
          </div>

          {/* Preparation Steps */}
          <div>
            <label
              htmlFor="steps"
              className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
            >
              Preparation Steps
            </label>
            <textarea
              id="steps"
              placeholder="Write each step on a new line"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="5"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 text-sm sm:text-base resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-blue-700 hover:scale-[1.02] transform transition duration-300 ease-in-out shadow-md"
          >
            ➕ Add Recipe
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <p className="mt-6 text-center text-blue-700 font-medium text-sm sm:text-base">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default AddRecipeForm;

