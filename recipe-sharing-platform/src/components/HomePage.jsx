import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load data.json
    fetch(new URL("../data.json", import.meta.url))
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
        🍴 Delicious Recipes
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Text Content */}
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-semibold text-blue-800 mb-2 hover:text-blue-500 transition-colors duration-200">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {recipe.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;


