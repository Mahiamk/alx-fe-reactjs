import { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstruction] = useState("");
  const [image, setImage] = useState("");

  // Validation state
  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const recipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions,
        image: image || "https://via.placeholder.com",
      };
      console.log("Validated Recipe:", recipe);


      addRecipe(recipe);

      setTitle("");
      setIngredients("");
      setInstruction("");
      setImage("");


      console.log("Recipe added:", recipe);
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = { title: "", ingredients: "", instructions: "" };

    if (!title) {
      errors.title = "Recipe title is required";
      valid = false;
    }
    if (!ingredients) {
      errors.ingredients = "Ingredients are required";
      valid = false;
    } else if (ingredients.split(",").length < 2) {
      errors.ingredients = "Ingredients should have at least two items";
      valid = false;
    }
    if (!instructions) {
      errors.instructions = "Preparation steps are required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter ingredients, separated by commas"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label htmlFor="preparation" className="block text-lg font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="preparation"
            rows="4"
            value={instructions}
            onChange={(e) => setInstruction(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter preparation steps"
          />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>

        <div>
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter image URL (optional)"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
