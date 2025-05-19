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

//-------------------------01 Exo 1-------------------------------//
dw('<section class="exo"><h2>Exercice 1</h2><div class="exo1"><img id="exo1-img" src="img/a.jpg" alt="Image description"><button>Changer d\'image</button></div>')

let exo1Div = document.createElement('div');
document.getElementById('main-content').appendChild(exo1Div);

// Quand je clique sur le bout, je passe de l'image A à l'image B

// Sélection (sélectionner les éléments nécessaire à la fonctionnalité) :
let monBouton = document.getElementsByTagName('button');
console.log(monBouton);

let monImage1 = document.getElementById('exo1-img');
console.log(monImage1);

let numeroImage1 = 'a';

// Évènement (on détecte l'évènement qui déclenchera la fonction) :
monBouton[0].addEventListener('click', modifyImage);

// Fonction (je développe la fonction) :
function modifyImage() {
	// Je vérifie si le click est détecté :
	console.log('click !');
	if (numeroImage1 == 'a') {
		numeroImage1 = 'b';
		// Tu changes l'image A en image B :
		monImage1.src = 'img/' + numeroImage1 + '.jpg';
	} else {
		numeroImage1 = 'a';
		monImage1.src = 'img/' + numeroImage1 + '.jpg';
	}
}
dw('</section>');

//-------------------------02 Exo 2-------------------------------//

// Quand je survole la div, elle devient rouge et quand je quitte le survole de la div elle devient jaune et avec un délai de 1 seconde elle revient bleu :


dw('<section class="exo"><h2>Exercice 2</h2><div id="exo2-cible" class="exo2">Survole-moi !</div>');

// Sélectionne ce div précisément
let divElement2 = document.getElementById('exo2-cible');
console.log(divElement2);

// Ajoute les écouteurs d'événements
divElement2.addEventListener('mouseover', () => {
    console.log('Survol !');
    divElement2.style.backgroundColor = "red";
});
divElement2.addEventListener('mouseout', () => {
    console.log('Désurvol !');
    divElement2.style.backgroundColor = "yellow";
    setTimeout(() => {
        divElement2.style.backgroundColor = "blue";
    }, 1000);
});

dw('</section>');

//-------------------------03 Exo 3-------------------------------//
dw('<section class="exo"><h2>Exercice 3</h2><div id="exo3-cible" class="exo3"><h1>Cliquez dans la div</h1><p>Paragraphe</p><p>Deuxième paragraphe</p><p>Troisième paragraphe</p></div>');

// Sélectionner précisément la div de l'exo 3 :
const divElement3 = document.getElementById('exo3-cible');
console.log(divElement3);

// Ajoute un écouteur d'événement pour le clique (click)
divElement3.addEventListener('click', () => {
    console.log('Cliqué !');
    // Appliquer le style aux éléments <p>
    divElement3.querySelectorAll('p').forEach(p => {
        Object.assign(p.style, {
            // - bordure rouge de 5px
            border: '5px solid red',
            // - couleur de fond orange
            backgroundColor: 'orange',
            // - marge intérieur de 15px
            padding: '15px',
            // - couleur de texte blanche
            color: 'white',
            // - taille de caractère de 25px
            fontSize: '25px'
        })
    });
    // Et le titre (h1) disparaît
    const h1Element = divElement3.querySelector('h1');
    if(h1Element) h1Element.style.display = 'none';
});

dw('</section>');

//-------------------------04 Exo 4-------------------------------//
dw('<section class="exo"><h2>Exercice 4</h2><label for="colorPicker">Choisissez une couleur :</label><input type="color" id="colorPicker" title="Choisissez une couleur"><div class="exo4-cible"></div><div class="exo4-cible"></div><div class="exo4-cible"></div><div class="exo4-cible"></div><div class="exo4-cible"></div>');

// Sélectionne l'input color
let inputElement = document.getElementById('colorPicker');
console.log(inputElement);

// Sélectionne toutes les divs à colorier
const divElements4 = document.querySelectorAll('.exo4-cible');
console.log(divElements4);

// Initialise l'index de la div actuelle
let currentIndex = 0;

// Sur chaque blur, changer la couleur de la div suivante
inputElement.addEventListener('blur', () => {
    console.log('Blur !');
    // Appliquer la couleur actuelle
    divElements4[currentIndex].style.backgroundColor = inputElement.value;
    // Passer à la div suivante, ou revenir à la première si on est à la fin
    currentIndex = (currentIndex + 1) % divElements4.length;
});

dw('</section>');

//-------------------------05 Exo 5-------------------------------//
dw('<section class="exo"><h2>Exercice 5</h2><img id="exo5-img" src="img/1.jpg" alt="1">');

let numeroImage5 = 1;
const maxImage5 = 6;
const imgElement5 = document.getElementById('exo5-img');

setInterval(() => {
    numeroImage5++;
    if (numeroImage5 > maxImage5) numeroImage5 = 1;
    imgElement5.src = 'img/' + numeroImage5 + '.jpg';
}, 2000);

dw('</section>');

//-------------------------06 Exo 6-------------------------------//
dw('<section class="exo6"><h2>Exercice 6</h2><button id="exo6-prev">Précédent</button><img id="exo6-img" src="img/1.jpg" alt="1"><button id="exo6-next">Suivant</button>');

let numImg6 = 1;
const totalImages6 = 6;

// Fonction pour mettre à jour l'image
function updateImage6() {
    document.getElementById('exo6-img').src = `img/${numImg6}.jpg`;
}

// Écouteur pour le bouton "Suivant"
document.getElementById('exo6-next').addEventListener('click', () => {
    numImg6 = (numImg6 % totalImages6) + 1;
    updateImage6();
});

// Écouteur pour le bouton "Précédent"
document.getElementById('exo6-prev').addEventListener('click', () => {
    numImg6 = (numImg6 - 2 + totalImages6) % totalImages6 + 1;
    updateImage6();
});

dw('</section>');

//-------------------------07 Exo 7-------------------------------//

/**
 * 
 * Création d'un message au chargement de la page pour demander le prénom de la personne connecté
 * Et mettre une réponse en alert "Bonjour, 'prénom de la personne' !" qui s'affiche au clic sur le bouton
 * 
 **/

dw('<section class="exo"><h2>Exercice 7</h2><button id="exo7-btn">Bonjour</button>');

var prenom7 = prompt("Comment t'appelles-tu?");
console.log(prenom7);

//* Sélection :
var monBouton7 = document.getElementById('exo7-btn');
console.log(monBouton7);

//* Évènement :
monBouton7.addEventListener('click', bonjour7);

//* Fonction :
function bonjour7() {
	//* Je vérifie :
	console.log('click !');
	//* Affiche une popup avec le nom de l'utilisateur dedans :
	alert('Bonjour, ' + prenom7 + ' !');
}

dw('</section>');

//-------------------------08 Exo 8-------------------------------//
dw('<section class="exo"><h2>Exercice 8</h2><a id="exo8-link" href="../../index.html">Accueil</a><div id="exo8-cible" class="exo8-cible"></div>');

const lien8 = document.getElementById('exo8-link');
const cible8 = document.getElementById('exo8-cible');

lien8.addEventListener('mouseover', () => {
    cible8.innerHTML = 'Description du lien!';
    cible8.classList.add('active');
});

lien8.addEventListener('mouseout', () => {
    cible8.innerText = '';
    cible8.classList.remove('active');
});

dw('</section>');

//-------------------------09 Exo 9-------------------------------//
dw('<section class="exo"><h2>Exercice 9</h2><label for="myTextarea9">Votre texte :</label><textarea id="myTextarea9" rows="10" cols="50" title="Saisissez votre texte ici" placeholder="Entrez votre texte ici"></textarea><p id="exo9-paragraphe">Placer le paragraphe ici</p></section>');

const monTexteArea9 = document.getElementById('myTextarea9');
const monParagraphe9 = document.getElementById('exo9-paragraphe');

monTexteArea9.addEventListener('input', () => {
    monParagraphe9.innerHTML = monTexteArea9.value;
});

//-------------------------10 Exo 10-------------------------------//

// Quand on arrive à 5 caractères, le message de succès 'OK' apparaît en vert, le champs devient vert et le bouton de validation se déverrouille.
// Quand je suis en dessous de 5 caractères, le message d'erreur 'Votre prénom doit contenir au moins 5 caractères' apparaît en rouge, le champs devient rouge et le bouton se verrouille.

dw('<section class="exo"><h2>Exercice 10</h2><form id="exo10-form"><label for="firstname10">Prénom</label><br><input type="text" id="firstname10" name="firstname10" placeholder="Entrez votre prénom" title="Prénom"><p id="exo10-msg"></p><input type="submit" id="exo10-submit" disabled></form></section>');

const inputText10 = document.getElementById('firstname10');
const paragraphe10 = document.getElementById('exo10-msg');
const inputButton10 = document.getElementById('exo10-submit');

inputText10.addEventListener('input', () => {
    if (inputText10.value.length < 5) {
        inputText10.style.backgroundColor = 'red';
        paragraphe10.innerHTML = 'Votre prénom doit contenir au moins 5 caractères';
        paragraphe10.style.color = 'red';
        inputButton10.setAttribute('disabled', 'true');
    } else {
        inputText10.style.backgroundColor = 'green';
        paragraphe10.innerHTML = 'OK';
        paragraphe10.style.color = 'green';
        inputButton10.removeAttribute('disabled');
    }
});

// Empêche la soumission réelle du formulaire
document.getElementById('exo10-form').addEventListener('submit', e => e.preventDefault());

dw('</main>');