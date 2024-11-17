import React from 'react';
import { useRecipeStore } from '../useRecipeStore'
import { useHistory } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();
  const history = useHistory();

  const handleDelete = () => {
    deleteRecipe(recipeId);

    history.push('/');
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;