import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';


const App = () => {
  return (
    <div className='App'>
      <h1>Recipe Store</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>

  );
}
export default App;
