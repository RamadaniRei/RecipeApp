import React from "react";
import "./style.css";

function Recipetile({ recipe }) {
  return (
    <div className="recipeTile">
      <img
        className="recipeTile__image"
        src={recipe.recipe.image}
        alt={recipe.recipe.label}
        onClick={() => window.open(recipe.recipe.url)}
      />
      <p className="recipeTile__name">{recipe.recipe.label}</p>
    </div>
  );
}

export default Recipetile;
