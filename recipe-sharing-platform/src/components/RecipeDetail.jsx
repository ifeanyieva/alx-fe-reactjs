import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(new URL("../data.json", import.meta.url))
      .then((response) => response.json())
      .then((data) => {
        const selected = data.find((item) => item.id === parseInt(id));
        setRecipe(selected);
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-lg">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        {/* Recipe Details */}
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">
            {recipe.title}
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center">
            {recipe.summary}
          </p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              🧂 Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {recipe.ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              )) || <p>No ingredients listed.</p>}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              👩‍🍳 Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions?.map((step, index) => (
                <li key={index}>{step}</li>
              )) || <p>No instructions available.</p>}
            </ol>
          </div>

          {/* Back Button */}
          <div className="text-center mt-10">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

