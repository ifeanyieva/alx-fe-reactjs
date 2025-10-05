import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import recipeData from './data.json';
import HomePage from "./components/HomePage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🍽️ Recipe List</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipeData.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;