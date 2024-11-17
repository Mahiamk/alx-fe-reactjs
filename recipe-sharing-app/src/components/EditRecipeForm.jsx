import React, { useState } from 'react';
import { useRecipeStore } from '../useRecipeStore'

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const { updateRecipe } = useRecipeStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { ...recipe, title, description };
    updateRecipe(updatedRecipe);
    // Optionally, redirect back to recipe details page
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter recipe title"
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the recipe"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
