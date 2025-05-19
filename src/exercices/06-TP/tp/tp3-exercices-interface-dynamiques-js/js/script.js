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
document.querySelectorAll('.miniature').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('img-grand').src = this.src;
        document.getElementById('img-grand').alt = this.alt;
        document.getElementById('legende-img').textContent = this.alt;
    });
});

//-------------------------02 Exo 2-------------------------------//
document.getElementById('input-exo2').addEventListener('input', function() {
    document.getElementById('output-exo2').textContent = this.value;
});

//-------------------------03 Exo 3-------------------------------//
document.getElementById('input-exo3').addEventListener('input', function() {
    const val = Number(this.value);
    if (!isNaN(val)) {
        document.getElementById('output-exo3').innerHTML = 
        'Carré : ' + (val*val) + '<br>Cube : ' + (val*val*val);
    } else {
        document.getElementById('output-exo3').textContent = '';
    }
});

//-------------------------04 Exo 4-------------------------------//
let posEx4 = 0;
document.getElementById('btn-bouge-exo4').addEventListener('click', function() {
    posEx4 += 40;
    document.getElementById('carre-bleu-exo4').style.left = posEx4 + 'px';
});

//-------------------------05 Exo 5-------------------------------//
window.addEventListener('scroll', function() {
    // Calcule la position en pourcentage de la largeur
    let maxLeft = window.innerWidth - 60; // 60 = largeur du carré
    let percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    let left = percent * maxLeft;
    document.getElementById('carre-vert-exo5').style.left = left + 'px';
});