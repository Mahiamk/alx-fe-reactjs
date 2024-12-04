import  { useState, useEffect } from "react";
import recipeData from '../data.json'
import { Link } from "react-router-dom";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=>{
    const fetchRecipes=()=>{
      setRecipes(recipeData);
    };
    fetchRecipes();
  },[]);

return (
  <div className="p-4 max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 hover:translate-y-[-5px]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
          </div>
          <Link to={`/recipe/${recipe.id}`}className="text-blue-600 mt-4 inline-block hover:underline font-semibold">
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  </div>
);
};


export default HomePage;
