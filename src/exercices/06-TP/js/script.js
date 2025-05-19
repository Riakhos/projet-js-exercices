// Ajoute ce JS à la fin de ton <body>
document.getElementById('burger-menu').onclick = function() {
    document.querySelector('.main-nav').classList.toggle('active');
};