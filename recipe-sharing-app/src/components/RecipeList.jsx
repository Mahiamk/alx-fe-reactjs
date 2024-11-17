import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <Recipe recipe={recipe} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;