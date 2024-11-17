import React, { useEffect } from 'react';
import Recipe from './Recipe';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  const recipeItems = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <ul>
      {recipeItems.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;