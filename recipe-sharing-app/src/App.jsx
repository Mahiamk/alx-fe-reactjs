import React from 'react';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoriteList';
import RecommendationsList from './components/RecommendationList';


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const { addFavorite, removeFavorite, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    // Fetch recipes from your data source
    const fetchRecipes = async () => {
      const response = await fetch('https://your-api-endpoint/recipes');
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const handleFavoriteClick = (recipeId) => {
    if (isFavorite(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  const isFavorite = (recipeId) => {
    return useRecipeStore.getState().favorites.includes(recipeId);
  };

  return (
    <div>
      <h1>Recipe App</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <button onClick={() => handleFavoriteClick(recipe.id)}>
              {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
      <SearchBar />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;