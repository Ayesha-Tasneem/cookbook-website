import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'mystical', name: 'Pink Dream', icon: '🌸' },
    { id: 'forest', name: 'Mint Garden', icon: '🌿' },
    { id: 'ocean', name: 'Sky Blue', icon: '💙' },
    { id: 'sunset', name: 'Golden Hour', icon: '🌅' },
    { id: 'moonlight', name: 'Lavender Mist', icon: '💜' }
  ];

  return (
    <div className="theme-toggle">
      <div className="theme-toggle-button">
        <span className="theme-icon">🎨</span>
        <span className="theme-label">Themes</span>
      </div>
      <div className="theme-dropdown">
        {themes.map(theme => (
          <button
            key={theme.id}
            className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
            onClick={() => onThemeChange(theme.id)}
          >
            <span className="theme-option-icon">{theme.icon}</span>
            <span className="theme-option-name">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle; 