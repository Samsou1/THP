import React from "react";

const Recipe = ({ data }) => {
  const { strMeal, strMealThumb, strSource } = data;

  return (
    <div className="recipe">
      <img src={strMealThumb} alt="Meal" />
      <h3>{strMeal}</h3>
      <a href={strSource} target="_blank">Aller voir la recette</a>
    </div>
  );
}

export default Recipe;