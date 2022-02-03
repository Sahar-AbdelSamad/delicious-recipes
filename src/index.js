import { listItems, listLikes } from './modules/listItems.js';
import mobileMenu from './modules/mobileMenu.js';
import './assets/style.css';

window.onload = () => {
  listItems();
  listLikes();
};

const lines = document.querySelector('.lines');
lines.addEventListener('click', mobileMenu);
