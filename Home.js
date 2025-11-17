import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredRecipes = [
    {
      id: 1,
      name: "Vanilla Cupcakes",
      category: "Cupcakes",
      description: "Soft and fluffy vanilla cupcakes with buttercream frosting",
      image: "🧁"
    },
    {
      id: 2,
      name: "Chocolate Chip Cookies",
      category: "Cookies",
      description: "Classic chocolate chip cookies with a soft center",
      image: "🍪"
    },
    {
      id: 3,
      name: "Birthday Cake",
      category: "Cakes",
      description: "Colorful birthday cake with sprinkles and frosting",
      image: "🎂"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: '#e75480', fontWeight: 'bold' }}>Welcome to Sweet Dreams Bakery</h1>
          <p className="hero-subtitle">
            Discover delicious recipes for cakes, cookies, and all your favorite sweet treats
          </p>
          <div className="hero-buttons">
            <Link to="/recipes" className="btn btn-primary">Explore Recipes</Link>
            <Link to="/add-recipe" className="btn btn-secondary">Share Your Recipe</Link>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-elements">
            <span className="floating-element">🧁</span>
            <span className="floating-element">🍪</span>
            <span className="floating-element">🎂</span>
            <span className="floating-element">🍰</span>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2 className="section-title">Featured Recipes</h2>
        <div className="featured-grid">
          {featuredRecipes.map(recipe => (
            <div key={recipe.id} className="featured-card">
              <div className="recipe-emoji">{recipe.image}</div>
              <h3>{recipe.name}</h3>
              <p className="recipe-category">{recipe.category}</p>
              <p className="recipe-description">{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="btn btn-small">View Recipe</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2 className="section-title">Recipe Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <span className="category-icon">🎂</span>
            <h3>Cakes</h3>
            <p>Beautiful layer cakes, sheet cakes, and special occasion cakes</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🧁</span>
            <h3>Cupcakes</h3>
            <p>Individual-sized treats perfect for parties and gifts</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🍪</span>
            <h3>Cookies</h3>
            <p>Classic cookies, bars, and bite-sized treats</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🍰</span>
            <h3>Pastries</h3>
            <p>Delicate pastries, tarts, and sweet breads</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 