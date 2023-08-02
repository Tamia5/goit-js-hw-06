const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  // console.log(liEl);

  liEl.classList.add('item');
  ingredientsList.appendChild(liEl);
})