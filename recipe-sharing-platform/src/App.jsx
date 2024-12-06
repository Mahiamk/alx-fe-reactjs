import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';
import './index.css';

function App() {
 
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    const updatedRecipes = [...recipes, recipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };
  const deleteRecipe = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
    const updatedRecipes = recipes.filter((recipe, index) => index !== id);
      setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    }
  };
  
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/add-recipe" className="text-white">Add Recipe</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage recipes={recipes} />} />

          <Route path='/recipe/:id' element={<RecipeDetail />} />

          <Route path='/add-recipe' element={<AddRecipeForm addRecipe={addRecipe} />} />
          <Route path='/' element={<HomePage recipes={recipes} deleteRecipe={deleteRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
