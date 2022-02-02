import comments from './comments.js';
import fetchData from './fetchData.js';
import { getAPI } from './involvementAPI.js';

export const listItems = async () => {
  const ul = document.querySelector('.recipes');
  const food = await fetchData();
  food.forEach((element) => {
    const li = document.createElement('li');
    li.className = 'recipe-item';

    const img = document.createElement('img');
    img.className = 'food-img';
    img.src = element.strMealThumb;
    img.alt = 'food';

    const p = document.createElement('p');
    p.textContent = element.strMeal;
    p.className = 'recipe-name';

    const div = document.createElement('div');
    div.className = 'likes';
    div.id = element.idMeal;

    const heart = document.createElement('i');
    heart.classList.add('far', 'fa-heart');
    heart.id = element.idMeal;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'comments';
    btn.innerText = 'Comments';
    btn.id = element.idMeal;
    comments(btn);

    div.appendChild(heart);
    p.appendChild(div);
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

export const listLikes = () => {
  getAPI().then((response) => {
    const like = Array.from(document.querySelectorAll('.likes'));
    for (let i = 0; i < like.length; i += 1) {
      response.forEach((item) => {
        if (item.item_id === like[i].id) {
          const small = document.createElement('small');
          small.className = 'small';
          small.textContent = `${item.likes} likes`;
          like[i].appendChild(small);
        }
      });
    }
  });
};
