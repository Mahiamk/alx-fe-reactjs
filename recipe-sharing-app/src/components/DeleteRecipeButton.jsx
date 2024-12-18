import React from 'react';
import { useRecipeStore } from './recipeStore'
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();
  const history = useHistory();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');

    history.push('/');
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;