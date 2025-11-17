import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const Recipes = ({ favorites, onToggleFavorite }) => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const categories = ['all', 'Cakes', 'Cupcakes', 'Cookies', 'Pastries', 'Breads'];

  useEffect(() => {
    // Load recipes from localStorage or use default bakery recipes
    const savedRecipes = localStorage.getItem('mysticalRecipes');
    const defaultRecipes = [
      {
        id: 1,
        name: "Vanilla Cupcakes",
        ingredients: ["2 cups flour", "1 cup sugar", "1/2 cup butter", "2 eggs", "1 tsp vanilla extract", "1 cup milk", "2 tsp baking powder"],
        instructions: "Preheat oven to 350°F. Cream butter and sugar until fluffy. Add eggs and vanilla, mix well. Alternately add flour and milk. Fill cupcake liners 2/3 full. Bake for 18-20 minutes. Cool completely before frosting.",
        category: "Cupcakes",
        prepTime: "15 minutes",
        cookTime: "20 minutes",
        servings: 12,
        difficulty: "Easy",
        magicalProperties: "Perfect for birthday parties and celebrations",
        emoji: "🧁"
      },
      {
        id: 2,
        name: "Chocolate Chip Cookies",
        ingredients: ["2 1/4 cups flour", "1 cup butter", "3/4 cup sugar", "3/4 cup brown sugar", "2 eggs", "1 tsp vanilla", "2 cups chocolate chips", "1 tsp baking soda"],
        instructions: "Preheat oven to 375°F. Cream butter and sugars until light and fluffy. Add eggs and vanilla. Mix in flour and baking soda. Fold in chocolate chips. Drop rounded tablespoons onto baking sheet. Bake 10-12 minutes.",
        category: "Cookies",
        prepTime: "20 minutes",
        cookTime: "12 minutes",
        servings: 24,
        difficulty: "Easy",
        magicalProperties: "Classic comfort cookies that everyone loves",
        emoji: "🍪"
      },
      {
        id: 3,
        name: "Birthday Cake",
        ingredients: ["3 cups flour", "2 cups sugar", "1 cup butter", "4 eggs", "2 tsp vanilla", "1 1/2 cups milk", "3 tsp baking powder", "Food coloring", "Sprinkles"],
        instructions: "Preheat oven to 350°F. Cream butter and sugar. Add eggs one at a time. Mix in vanilla. Alternately add flour and milk. Divide batter and add food coloring. Bake in layers for 25-30 minutes. Frost and decorate with sprinkles.",
        category: "Cakes",
        prepTime: "30 minutes",
        cookTime: "30 minutes",
        servings: 16,
        difficulty: "Medium",
        magicalProperties: "Brings joy and celebration to any occasion",
        emoji: "🎂"
      },
      {
        id: 4,
        name: "Cinnamon Rolls",
        ingredients: ["3 cups flour", "1/4 cup sugar", "1 packet yeast", "1 cup warm milk", "1/4 cup butter", "1 egg", "1/2 cup brown sugar", "2 tsp cinnamon"],
        instructions: "Mix flour, sugar, and yeast. Add warm milk, butter, and egg. Knead dough for 5 minutes. Let rise 1 hour. Roll out, spread with butter, brown sugar, and cinnamon. Roll up and cut into pieces. Bake at 375°F for 20 minutes.",
        category: "Pastries",
        prepTime: "2 hours",
        cookTime: "20 minutes",
        servings: 12,
        difficulty: "Medium",
        magicalProperties: "Warm, gooey comfort food perfect for breakfast",
        emoji: "🥐"
      },
      {
        id: 5,
        name: "Banana Bread",
        ingredients: ["2 cups flour", "1 cup sugar", "1/2 cup butter", "2 eggs", "3 ripe bananas", "1 tsp baking soda", "1/2 tsp salt", "1 tsp vanilla"],
        instructions: "Preheat oven to 350°F. Mash bananas. Cream butter and sugar. Add eggs and vanilla. Mix in mashed bananas. Add flour, baking soda, and salt. Pour into greased loaf pan. Bake for 50-60 minutes.",
        category: "Breads",
        prepTime: "15 minutes",
        cookTime: "60 minutes",
        servings: 10,
        difficulty: "Easy",
        magicalProperties: "Moist and delicious way to use up ripe bananas",
        emoji: "🍞"
      }
    ];

    if (savedRecipes) {
      // Check if saved recipes are bakery-themed, if not use defaults
      const parsedRecipes = JSON.parse(savedRecipes);
      const hasBakeryRecipes = parsedRecipes.some(recipe => 
        ['Cakes', 'Cupcakes', 'Cookies', 'Pastries', 'Breads'].includes(recipe.category)
      );
      
      if (hasBakeryRecipes) {
        setRecipes(parsedRecipes);
      } else {
        setRecipes(defaultRecipes);
        localStorage.setItem('mysticalRecipes', JSON.stringify(defaultRecipes));
      }
    } else {
      setRecipes(defaultRecipes);
      localStorage.setItem('mysticalRecipes', JSON.stringify(defaultRecipes));
    }
  }, []);

  useEffect(() => {
    let filtered = recipes;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    // Filter by favorites
    if (showFavoritesOnly) {
      filtered = filtered.filter(recipe => favorites.includes(recipe.id));
    }

    setFilteredRecipes(filtered);
  }, [recipes, searchTerm, selectedCategory, showFavoritesOnly, favorites]);

  // Enhance recipes with favorites data
  const enhancedRecipes = filteredRecipes.map(recipe => ({
    ...recipe,
    isFavorite: favorites.includes(recipe.id)
  }));

  return (
    <div className="recipes-page">
      <div className="recipes-header">
        <h1 className="page-title">Sweet Bakery Recipes</h1>
        <p className="page-subtitle">Discover delicious treats from our collection</p>
      </div>

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search recipes or ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>

          <div className="favorites-filter">
            <button
              className={`favorites-toggle ${showFavoritesOnly ? 'active' : ''}`}
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            >
              {showFavoritesOnly ? '❤️' : '🤍'} Favorites Only
            </button>
          </div>
        </div>
      </div>

      <div className="recipes-grid">
        {enhancedRecipes.length > 0 ? (
          enhancedRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        ) : (
          <div className="no-recipes">
            <div className="no-recipes-content">
              <span className="no-recipes-icon">🧁</span>
              <h3>No recipes found</h3>
              <p>
                {showFavoritesOnly 
                  ? "You haven't added any favorites yet. Start exploring recipes!"
                  : "No recipes match your current filters. Try adjusting your search."
                }
              </p>
              <Link to="/add-recipe" className="btn btn-primary">
                Add Your First Recipe
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes; 
