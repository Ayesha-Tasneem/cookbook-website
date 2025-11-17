import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('mysticalRecipes') || '[]');
    const found = recipes.find(r => String(r.id) === String(id));
    setRecipe(found);
  }, [id]);

  const handleCopy = () => {
    if (!recipe) return;
    const text = `"${recipe.name}"

Category: ${recipe.category}
Prep Time: ${recipe.prepTime}
Cook Time: ${recipe.cookTime}
Servings: ${recipe.servings}
Difficulty: ${recipe.difficulty}

Ingredients: ${recipe.ingredients.join(', ')}

Instructions: ${recipe.instructions}

Description: ${recipe.magicalProperties}`;
    navigator.clipboard.writeText(text);
  };

  if (!recipe) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="recipe-detail-page">
      <div className="recipe-header">
        <div className="recipe-title-section">
          <h1 className="recipe-title">{recipe.emoji} {recipe.name}</h1>
          <div className="recipe-meta-grid">
            <div className="meta-item">
              <span className="meta-icon">🍰</span>
              <div className="meta-content">
                <span className="meta-label">Category</span>
                <span className="meta-value">{recipe.category}</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <div className="meta-content">
                <span className="meta-label">Prep Time</span>
                <span className="meta-value">{recipe.prepTime}</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🔥</span>
              <div className="meta-content">
                <span className="meta-label">Cook Time</span>
                <span className="meta-value">{recipe.cookTime}</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🍽️</span>
              <div className="meta-content">
                <span className="meta-label">Servings</span>
                <span className="meta-value">{recipe.servings}</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⭐</span>
              <div className="meta-content">
                <span className="meta-label">Difficulty</span>
                <span className="meta-value">{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-section">
          <h2 className="section-title">Ingredients</h2>
          <div className="ingredients-block">
            {recipe.ingredients.map((ingredient, idx) => (
              <span key={idx} style={{ display: 'block' }}>{ingredient}</span>
            ))}
          </div>
        </div>
        <div className="recipe-section">
          <h2 className="section-title">Instructions</h2>
          <div>
            {recipe.instructions}
          </div>
        </div>
        {recipe.magicalProperties && (
          <div className="recipe-section">
            <h2 className="section-title">Description</h2>
            <div>{recipe.magicalProperties}</div>
          </div>
        )}
        <div className="recipe-actions">
          <button className="btn btn-primary" onClick={handleCopy}>Copy Recipe</button>
          <Link to="/recipes" className="btn btn-secondary">Back to Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 