// Add interactivity here if needed
// Example: Toggle mobile menu
const navMenus = document.querySelector('.nav__menus');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.classList.add('menu-toggle');
document.querySelector('.nav__bar').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navMenus.classList.toggle('active');
});