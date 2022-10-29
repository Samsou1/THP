import React, { useEffect, useState } from "react";
import Recipe from "../Recipe";

const RecipeContainer = () => {
  const [recipe, setRecipe] = useState({});

  const handleClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(result => setRecipe(result.meals[0]))
      .catch(error => console.error(error));
  }

  useEffect(() => console.log(Object.keys(recipe)), [recipe]);

  return (
    <div className="recipe-container">
      <button onClick={handleClick}>Me proposer une recette</button>
      { Object.keys(recipe).length > 0 && <Recipe data={recipe} /> }
    </div>
  )
}

export default RecipeContainer;