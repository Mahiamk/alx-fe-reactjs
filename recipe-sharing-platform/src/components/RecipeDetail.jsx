import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();  
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    const recipeDataItem = recipeData.find((item) => item.id === parseInt(id));

    if (recipeDataItem) {
      setRecipe(recipeDataItem);
    } else {
      console.error("Recipe not found!");
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  const Instructions = recipe.instructions.join(" ");


  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>

        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <p className="text-gray-700">{ Instructions} </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
