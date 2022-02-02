import fetchSingleData from './fetchSingleData.js';

const comments = (btn) => {
  const modal = document.getElementById('commentModal');
  const span = document.getElementsByClassName('close')[0];
  const modalContent = document.getElementById('modalContent');

  btn.onclick = async () => {
    const data = await fetchSingleData(btn.id);
    const {
      strMealThumb,
      strMeal,
      strCategory,
      strArea,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strInstructions,
    } = data;
    modal.style.display = 'block';
    modalContent.innerHTML = `
    <img src=${strMealThumb} alt=${strMeal} />
    <h1>${strMeal}</h1>
    <h2>Instructions</h2>
    <p>${strInstructions}</p>
    <table>
    <tr>
    <td><strong>Category:</strong> ${strCategory}</td>
    <td><strong>Area:</strong> ${strArea}</td>
    </tr>
    <tr>
    <td><strong>Ingredient 1:</strong> ${strIngredient1}</td>
    <td><strong>Ingredient 2:</strong> ${strIngredient2}</td>
    </tr>
    <tr>
    <td><strong>Ingredient 3:</strong> ${strIngredient3}</td>
    <td><strong>Ingredient 4:</strong> ${strIngredient4}</td>
    </tr>
    <tr>
    <td><strong>Ingredient 5:</strong> ${strIngredient5}</td>
    <td><strong>Ingredient 6:</strong> ${strIngredient6}</td>
    </tr>
    <tr>
    <td><strong>Ingredient 7:</strong> ${strIngredient7}</td>
    <td><strong>Ingredient 8:</strong> ${strIngredient8}</td>
    </tr>
    <tr>
    <td><strong>Ingredient 9:</strong> ${strIngredient9}</td>
    <td><strong>Ingredient 10:</strong> ${strIngredient10}</td>
    </tr>
    <tr>
    <td><strong>Ingredient 11:</strong> ${strIngredient11}</td>
    <td><strong>Ingredient 12:</strong> ${strIngredient12}</td>
    </tr>
    <tr>
    <td><strong>Ingredient 13:</strong> ${strIngredient13}</td>
    <td><strong>Ingredient 14:</strong> ${strIngredient14}</td>
    </tr>
    </table>
    `;
  };

  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
};

export default comments;
