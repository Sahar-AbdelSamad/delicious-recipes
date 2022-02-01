import listItems from './listItems.js';
import { getAPI } from './involvementAPI.js';
import './style.css';

window.onload = () => {
  listItems();
  getAPI().then((response) => {
    const like = Array.from(document.querySelectorAll('.likes'));
    for (let i = 0; i < like.length; i += 1) {
      response.forEach((item) => {
        if (item.item_id === like[i].id) {
          const small = document.createElement('small');
          small.className = ('small');
          small.textContent = `${item.likes} likes`;
          like[i].appendChild(small);
        }
      });
    }
  });
};