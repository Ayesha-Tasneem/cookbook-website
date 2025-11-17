import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy',
    ingredients: [''],
    instructions: '',
    magicalProperties: ''
  });

  const categories = ['Cakes', 'Cupcakes', 'Cookies', 'Pastries', 'Breads'];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const removeIngredient = (index) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Filter out empty ingredients
    const filteredIngredients = recipe.ingredients.filter(ingredient => ingredient.trim() !== '');
    
    const newRecipe = {
      ...recipe,
      id: Date.now(),
      ingredients: filteredIngredients
    };

    // Get existing recipes from localStorage
    const existingRecipes = JSON.parse(localStorage.getItem('mysticalRecipes') || '[]');
    const updatedRecipes = [...existingRecipes, newRecipe];
    
    // Save to localStorage
    localStorage.setItem('mysticalRecipes', JSON.stringify(updatedRecipes));
    
    // Navigate to recipes page
    navigate('/recipes');
  };

  return (
    <div className="add-recipe-page">
      <div className="page-header">
        <h1 className="page-title">Share Your Sweet Recipe</h1>
        <p className="page-subtitle">Add your delicious creation to our bakery collection</p>
      </div>

      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Basic Information</h2>
          
          <div className="form-group">
            <label htmlFor="name">Recipe Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              placeholder="Enter the name of your recipe"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={recipe.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="difficulty">Difficulty Level</label>
              <select
                id="difficulty"
                name="difficulty"
                value={recipe.difficulty}
                onChange={handleChange}
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="prepTime">Preparation Time</label>
              <input
                type="text"
                id="prepTime"
                name="prepTime"
                value={recipe.prepTime}
                onChange={handleChange}
                placeholder="e.g., 15 minutes"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cookTime">Cooking Time</label>
              <input
                type="text"
                id="cookTime"
                name="cookTime"
                value={recipe.cookTime}
                onChange={handleChange}
                placeholder="e.g., 30 minutes"
              />
            </div>

            <div className="form-group">
              <label htmlFor="servings">Servings</label>
              <input
                type="number"
                id="servings"
                name="servings"
                value={recipe.servings}
                onChange={handleChange}
                placeholder="12"
                min="1"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Ingredients</h2>
          <p className="section-description">List all the ingredients needed for your recipe</p>
          
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-input-group">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                placeholder="Enter ingredient (e.g., 2 cups flour)"
                className="ingredient-input"
              />
              {recipe.ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="remove-ingredient"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          
          <button
            type="button"
            onClick={addIngredient}
            className="btn btn-secondary"
          >
            + Add Ingredient
          </button>
        </div>

        <div className="form-section">
          <h2>Instructions</h2>
          <p className="section-description">Share the steps to create your recipe</p>
          
          <div className="form-group">
            <label htmlFor="instructions">Cooking Instructions *</label>
            <textarea
              id="instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              placeholder="Describe each step of your recipe..."
              rows="6"
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Recipe Description</h2>
          <p className="section-description">What makes this recipe special?</p>
          
          <div className="form-group">
            <label htmlFor="magicalProperties">Recipe Description</label>
            <textarea
              id="magicalProperties"
              name="magicalProperties"
              value={recipe.magicalProperties}
              onChange={handleChange}
              placeholder="e.g., Perfect for birthday parties, great for beginners, family favorite..."
              rows="3"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            🧁 Add Recipe to Collection
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe; 