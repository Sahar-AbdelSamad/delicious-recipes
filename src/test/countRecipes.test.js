import countRecipes from '../modules/countRecipes.js';

describe('Count the number of recipes on the page', () => {
  test('Return 1 when there is only one meal in the array', () => {
    const recipes = [
      {
        strMeal: 'Ayam Percik',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
        idMeal: '53050',
      },
    ];
    expect(countRecipes(recipes)).toBe(1);
  });

  test('Return 0 when the array is empty', () => {
    const recipes = [];
    expect(countRecipes(recipes)).toBe(0);
  });
});