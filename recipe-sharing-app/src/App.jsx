import React from 'react';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


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
      <Router>
      <div className="App">
        <h1>Recipe Store</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>

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