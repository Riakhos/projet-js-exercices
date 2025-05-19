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

function dw(html) {
    document.getElementById('main-content').insertAdjacentHTML('beforeend', html + '<br>');
}

//-------------------------01 Sélection Naturelle-------------------------------//
dw('<section class="exo"><h2>01 Sélection Naturelle</h2>');

// Je peux sélectionner un élément grâce à son id :
let selection1 = document.getElementById('masection');

// On vérifie en affichant la variable dans la console :
console.log(selection1);

dw('<div class="exo-result">' + selection1.innerHTML + '<br></br>' + typeof(selection1) + '</div>');
dw('</section>');

//--------------------------02 Sélection ById-----------------------------------//
dw('<section class="exo"><h2>02 Sélection ById</h2>');

// On peut sélectionner un élément grâce à son id :
let selection2 = document.getElementById('masection');
console.log(selection2);

dw('<div class="exo-result">' + selection2.innerHTML + '</div>');
dw('</section>');

//----------------------------03 Sélection ByTagName----------------------------//
dw('<section class="exo"><h2>03 Sélection ByTagName</h2>');

// On peut sélectionner un élément grâce au nom de sa balise :
let selection3 = document.getElementsByTagName('span');

console.log(selection3);

dw('<div class="exo-result">' + selection3[0].innerHTML + '</div>');
dw('</section>');

//----------------------------04 Sélection ByClassName--------------------------//
dw('<section class="exo"><h2>04 Sélection ByClassName</h2>');

// On peut sélectionner des éléments grâce au nom de leur class :
let selection4 = document.getElementsByClassName('avion');

console.log(selection4);

// Exercice :
// Afficher le contenu des 3 div class avion dans la console :
for (let i = 0; i < selection4.length; i++) {
	dw('<div class="exo-result">' + selection4[i].innerHTML + '</div>');
}

dw('</section>');

//----------------------------05 Sélection QuerySelector--------------------------//
dw('<section class="exo"><h2>05 Sélection QuerySelector</h2>');

// On sélectionne le premier élément d'une liste :
let selection5 = document.querySelector('p');

console.log(selection5);

dw('<div class="exo-result">' + selection5.innerHTML + '</div>');
dw('</section>');

//----------------------------06 Sélection QuerySelectorAll-----------------------//
dw('<section class="exo"><h2>06 Sélection QuerySelectorAll</h2>');

// On sélectionne tous les éléments d'une liste que ce soit des balises, des #id ou des .class :
let selection6 = document.querySelectorAll('p');

console.log(selection6);
// On l'affiche :
for (let i = 0; i < selection6.length; i++) {
	dw('<div class="exo-result">' + selection6[i].innerHTML + '</div>');
}

dw('</section>');
