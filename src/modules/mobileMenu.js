const nav = document.querySelector('.navigation');
const mobileNav = document.querySelector('.nav-mobile');

const mobileMenu = () => {
  nav.classList.toggle('navigation');
  mobileNav.classList.toggle('menu');
};

document.querySelector('.lines-mobile').addEventListener('click', mobileMenu);

const mobile = document.querySelectorAll('.mobile');
mobile.forEach((item) => item.addEventListener('click', mobileMenu));

const recipesNav = document.querySelector('.allRecipes');
const recipesNavMobile = document.querySelector('.recipes-counter-mobile');
const aboutNav = document.querySelector('.about');
const aboutNavMobile = document.querySelector('.about-mobile');
const recipes = document.querySelector('#allRecipes');
const about = document.querySelector('#about');
aboutNav.addEventListener('click', () => {
  about.style.display = ('block');
  recipes.style.display = ('none');
});
aboutNavMobile.addEventListener('click', () => {
  about.style.display = ('block');
  recipes.style.display = ('none');
});
recipesNav.addEventListener('click', () => {
  about.style.display = ('none');
  recipes.style.display = ('block');
});
recipesNavMobile.addEventListener('click', () => {
  about.style.display = ('none');
  recipes.style.display = ('block');
});

export default mobileMenu;
