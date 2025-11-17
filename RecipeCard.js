import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onToggleFavorite }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(recipe.id);
  };

  return (
    <div className="recipe-card-enhanced">
      <div className="recipe-card-header">
        <div className="recipe-emoji-large">{recipe.emoji || '🍽️'}</div>
        <button
          className={`favorite-button ${recipe.isFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          title={recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {recipe.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="recipe-card-content">
        <div className="recipe-header">
          <h3 className="recipe-name">{recipe.name}</h3>
          <span className="recipe-category">{recipe.category}</span>
        </div>
        
        <div className="recipe-meta">
          <span className="recipe-time">⏱️ {recipe.prepTime}</span>
          <span className="recipe-servings">👥 {recipe.servings} servings</span>
          <span className="recipe-difficulty">⭐ {recipe.difficulty}</span>
        </div>

        <p className="recipe-description">{recipe.magicalProperties}</p>

        <div className="recipe-ingredients-preview">
          <strong>Key Ingredients:</strong>
          <div className="ingredients-list">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <span key={index} className="ingredient-tag">{ingredient}</span>
            ))}
            {recipe.ingredients.length > 3 && (
              <span className="ingredient-tag">+{recipe.ingredients.length - 3} more</span>
            )}
          </div>
        </div>

        <div className="recipe-actions">
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard; 