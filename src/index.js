import { listItems, listLikes } from './modules/listItems.js';
import './assets/style.css';

window.onload = () => {
  listItems();
  listLikes();
};
