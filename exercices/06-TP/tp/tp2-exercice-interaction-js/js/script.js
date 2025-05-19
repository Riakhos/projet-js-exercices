//* Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
    //* Sélection directe du bouton burger et du menu nav principal
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.main-nav');

    //* Vérifier que les éléments existent avant d'ajouter l'écouteur d'événements
    if (burger && nav) {
        burger.addEventListener('click', () => {
            //* Basculer la classe 'active' sur le menu nav
            nav.classList.toggle('active');
            
            //* Mettre à jour l'icône et l'affichage du menu en fonction de l'état de 'active'
            if (nav.classList.contains('active')) {
                //* Icône de fermeture
                burger.src = 'img/close.png';
                //* Afficher le menu
                nav.style.display = 'block';
            } else {
                //* Icône de burger
                burger.src = 'img/burger.png';
                //* Masquer le menu
                nav.style.display = 'none';
            }
        });

        // Par défaut, masquer le menu sur mobile
        if (window.innerWidth <= 660) {
            nav.style.display = 'none';
        }
        // Réafficher le menu si on repasse en desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 660) {
                nav.style.display = '';
                nav.classList.remove('active');
                burger.src = 'img/burger.png';
            } else {
                nav.style.display = 'none';
                nav.classList.remove('active');
                burger.src = 'img/burger.png';
            }
        });
    } else {
        console.error("L'élément burger ou nav n'a pas été trouvé");
    }
});

//-------------------------01 Exo 1-------------------------------//
document.getElementById('btn-change').onclick = function() {
    const carre = document.getElementById('carre-bleu');
    if (carre.style.background === 'green') {
        carre.style.background = 'blue';
    } else {
        carre.style.background = 'green';
    }
};

//-------------------------02 Exo 2-------------------------------//
const imgExo2 = document.getElementById('img-exo2');
let imgExo2Width = 100;

document.getElementById('btn-dim-img').onclick = function() {
    imgExo2Width -= 20;
    imgExo2.style.width = imgExo2Width + 'px';
};

document.getElementById('btn-reset-img').onclick = function() {
    imgExo2Width = 100;
    imgExo2.style.width = imgExo2Width + 'px';
};

document.getElementById('btn-agrandir-img').onclick = function() {
    imgExo2Width += 20;
    imgExo2.style.width = imgExo2Width + 'px';
};

//-------------------------03 Exo 3-------------------------------//
document.getElementById('color-bg').addEventListener('input', function(e) {
    document.body.style.background = e.target.value;
});

//-------------------------04 Exo 4-------------------------------//
const carreNoir = document.getElementById('carre-noir');
let carreNoirSize = 100;
carreNoir.onclick = function() {
    carreNoirSize = carreNoirSize === 100 ? 200 : 100;
    carreNoir.style.width = carreNoirSize + 'px';
    carreNoir.style.height = carreNoirSize + 'px';
};

//-------------------------05 Exo 5-------------------------------//
const slider = document.getElementById('slider');
const images = [
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg'
];
let current = 0;

// Fonction pour afficher l'image courante
function showImage(index) {
    slider.src = images[index];
}

// Slider automatique
let sliderInterval = setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
}, 5000);

// Bouton suivant
document.getElementById('btn-next-slider').onclick = function() {
    clearInterval(sliderInterval);
    current = (current + 1) % images.length;
    showImage(current);
    sliderInterval = setInterval(() => {
        current = (current + 1) % images.length;
        showImage(current);
    }, 5000);
};

// Bouton précédent
document.getElementById('btn-prev-slider').onclick = function() {
    clearInterval(sliderInterval);
    current = (current - 1 + images.length) % images.length;
    showImage(current);
    sliderInterval = setInterval(() => {
        current = (current + 1) % images.length;
        showImage(current);
    }, 5000);
};