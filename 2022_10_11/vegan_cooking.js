class Recipe {
  constructor(title, steps){
    this.title = title;
    this.steps = steps;
  }
}

Recipe.prototype.cook = function(){
  var str = '';
  for(var ingredient of this.steps){
    if(ingredient.length == 4){
      if(ingredient[3] == 'dry'){
        str += `Add ${ingredient[0]} ${ingredient[1]} of ${ingredient[2]} to the bowl. `;
      }else if(ingredient[3] == 'wet'){
        str += `For ${ingredient[0]} ${ingredient[1]} of ${ingredient[2]} to the bowl. `;
      }
    }else if(ingredient.length == 1){
      str += ingredient[0];
      str += `Then, heat ${this.steps[this.steps.length - 1][1]} minutes in the oven at ${[this.steps[this.steps.length - 1][0]]} degrees.`
      return str;
    }
  }
}

steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
];



var recipe = new Recipe('cookies', steps);
console.log(recipe.title);
console.log(recipe.steps);
console.log(recipe.cook());