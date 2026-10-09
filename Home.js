const menutoggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector('.side-menu');

menutoggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

const sideMenuLinks = document.querySelectorAll('.side-menu a');
sideMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.side-menu').classList.remove('open');
    });
});
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});