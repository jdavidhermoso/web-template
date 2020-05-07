const menuHandler = document.getElementById('menu-handler');
menuHandler.addEventListener('click', () => {
    let nav = document.getElementById('nav');
    nav.classList.toggle('displayed');
    menuHandler.classList.toggle('open');
});
