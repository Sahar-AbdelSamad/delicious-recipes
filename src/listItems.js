import fetchData from './fetchData.js';

const listItems = async () => {
  const ul = document.querySelector('.recipes');
  const food = await fetchData();
  food.forEach((element) => {
    const li = document.createElement('li');
    li.className = ('recipe-item');
    li.id = element.idMeal;

    const img = document.createElement('img');
    img.className = ('food-img');
    img.src = element.strMealThumb;
    img.alt = ('food');

    const p = document.createElement('p');
    p.textContent = element.strMeal;
    p.className = ('recipe-name');

    const div = document.createElement('div');
    div.className = ('likes');

    const heart = document.createElement('i');
    heart.classList.add('far', 'fa-heart');
    heart.id = element.idMeal;
    const small = document.createElement('small');
    small.textContent = '5 likes';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = ('comments');
    btn.innerText = 'Comments';
    btn.id = element.idMeal;

    div.appendChild(heart);
    div.appendChild(small);
    p.appendChild(div);
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

export default listItems;