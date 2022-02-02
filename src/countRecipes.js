const countRecipes = () => {
  const counter = document.querySelector('.recipes-counter');
  const recipe = document.querySelectorAll('.recipe-item');
  counter.innerText = (`Recipes (${recipe.length})`);
};

export default countRecipes;