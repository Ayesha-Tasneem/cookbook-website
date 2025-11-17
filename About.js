import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="page-title">About Sweet Dreams Bakery</h1>
        <p className="page-subtitle">Where baking dreams come true</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>🧁 Our Story</h2>
          <p>
            Sweet Dreams Bakery is a celebration of the art of baking - the joy of creating 
            delicious treats that bring smiles to faces and warmth to hearts. For generations, 
            bakers have understood that the kitchen is a magical place where simple ingredients 
            transform into extraordinary delights through love, patience, and a little bit of 
            baking magic.
          </p>
          <p>
            Our collection brings together recipes that honor this tradition, combining classic 
            techniques with modern twists. Each recipe is crafted to create not just delicious 
            treats, but memorable moments shared with family and friends.
          </p>
        </section>

        <section className="about-section">
          <h2>✨ What Makes Baking Special?</h2>
          <div className="mystical-elements">
            <div className="element-card">
              <span className="element-icon">🥚</span>
              <h3>Quality Ingredients</h3>
              <p>Using the finest ingredients ensures your baked goods turn out perfectly 
              every time.</p>
            </div>
            
            <div className="element-card">
              <span className="element-icon">⏰</span>
              <h3>Perfect Timing</h3>
              <p>Baking is all about timing - from mixing to baking, every step matters 
              for the best results.</p>
            </div>
            
            <div className="element-card">
              <span className="element-icon">💝</span>
              <h3>Made with Love</h3>
              <p>The love and care you put into your baking makes every treat taste 
              even more delicious.</p>
            </div>
            
            <div className="element-card">
              <span className="element-icon">🎨</span>
              <h3>Creative Expression</h3>
              <p>Baking is an art form - decorate, experiment, and make each recipe 
              uniquely yours.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>🍰 Baking Categories</h2>
          <div className="traditions-grid">
            <div className="tradition-item">
              <h3>Cakes</h3>
              <p>Layer cakes, sheet cakes, and special occasion cakes<br/>
              Perfect for birthdays, celebrations, and everyday indulgence<br/>
              From simple vanilla to elaborate chocolate creations<br/>
              Endless possibilities for decoration and flavor</p>
            </div>
            
            <div className="tradition-item">
              <h3>Cookies & Bars</h3>
              <p>Classic chocolate chip cookies, chewy brownies<br/>
              Crispy sugar cookies, gooey blondies<br/>
              Perfect for sharing and gifting<br/>
              Great for beginners and experienced bakers alike</p>
            </div>
            
            <div className="tradition-item">
              <h3>Pastries & Breads</h3>
              <p>Flaky croissants, sweet cinnamon rolls<br/>
              Moist banana bread, tender muffins<br/>
              Comfort food that warms the soul<br/>
              Perfect for breakfast and brunch</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>🌟 How to Use This Bakery</h2>
          <div className="usage-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Choose Your Recipe</h3>
                <p>Browse our collection and find a recipe that inspires you. Consider the 
                difficulty level and time required.</p>
              </div>
            </div>
            
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Gather Your Ingredients</h3>
                <p>Make sure you have all the ingredients on hand. Fresh, quality ingredients 
                make all the difference in baking.</p>
              </div>
            </div>
            
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Follow the Instructions</h3>
                <p>Read through the recipe carefully and follow each step. Baking is a science, 
                so precision matters.</p>
              </div>
            </div>
            
            <div className="step">
              <span className="step-number">4</span>
              <div className="step-content">
                <h3>Share the Joy</h3>
                <p>When you share your baked goods with others, you're not just sharing food - 
                you're sharing love and happiness.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>💝 Share Your Creations</h2>
          <p>
            We believe that everyone has their own unique baking style. Whether you're a 
            seasoned baker or just beginning your baking journey, we invite you to share your 
            recipes and experiences with our community.
          </p>
          <p>
            Every recipe you add becomes part of our growing collection of baking wisdom, helping 
            others discover the joy and satisfaction of creating delicious treats from scratch.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 