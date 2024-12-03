import  { useState, useEffect } from "react";
import recipeData from '../data.json'
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
        <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
            <p className="text-black-bold-600 text-sm mt-2">{recipe.summary}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default HomePage;
