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

//--------------------------------------01 Click----------------------------------//
dw('<section class="exo"><h2>01 Click</h2><div class="bleu">click</div>');

// Quand je clique sur la div bleu, je fais apparaître une alerte pour dire un message.

// Sélectionner ma div :
let selection1 = document.getElementsByClassName('bleu');
console.log(selection1);
// dw(selection1);

// Je détecte quand il y a un clique sur la div :
selection1[0].addEventListener('click', click);

// Je crée la fonction click :
function click() {
	alert('Vous avez cliqué !');
}

dw('</section>');

//-----------------------------------02 dblClick----------------------------------//
dw('<section class="exo"><h2>02 dblClick</h2><div class="rouge">dblclick</div>');

// Sélectionner ma div :
let selection2 = document.getElementsByClassName('rouge');
// Je vérifie :
console.log(selection2);
// Je l'affiche :
// dw(selection2);

// Je détecte quand il y a un clique sur la div :
selection2[0].addEventListener('dblclick', dblclick);

// Je crée la fonction dblclick :
function dblclick() {
	alert('Vous avez double cliqué !');
}

dw('</section>');

//-----------------------------------03 mouseover---------------------------------//
dw('<section class="exo"><h2>03 mouseover</h2><div class="jaune">mouseover</div>');

// Sélectionner ma div :
let selection3 = document.getElementsByClassName('jaune');
// Je vérifie :
console.log(selection3);
// Je l'affiche :
// dw(selection3);

// Je détecte quand il y a un clique sur la div :
selection3[0].addEventListener('mouseover', mouseover);

// Je crée la fonction mouseover :
function mouseover() {
	alert('Vous avez fait un survol sur la div jaune !');
}

dw('</section>');

//-----------------------------------04 mouseout---------------------------------//
dw('<section class="exo"><h2>04 mouseout</h2><div class="vert">mouseout</div>');

// Sélectionner ma div :
let selection4 = document.getElementsByClassName('vert');
// Je vérifie :
console.log(selection4);
// Je l'affiche :
// dw(selection4);

// Je détecte quand il y a un clique sur la div :
selection4[0].addEventListener('mouseout', mouseout);

// Je crée la fonction mouseout :
function mouseout() {
	alert('Vous êtes sorti du survol de la div verte !');
}

dw('</section>');

//-----------------------------------05 blur--------------------------------------//
dw('<section class="exo"><h2>05 blur</h2><div class="rose"><input type="text" id="input-blur" placeholder="Entrez du texte" title="Champ de texte pour blur">blur</div>');

// Sélectionner ma div :
let selection5 = document.getElementsByTagName('input');
// Je vérifie :
console.log(selection5);
// Je l'affiche :
// dw(selection5);

// Je détecte quand il y a un clique sur la div :
selection5[0].addEventListener('blur', fcblur);

// Je crée la fonction blur :
function fcblur() {
	alert("Vous avez désélectionné le champ de la div rose !");
}

dw('</section>');

//----------------------------------06 hover--------------------------------------//
dw('<section class="exo"><h2>06 focus</h2><div class="orange"><input type="text" id="input-focus" placeholder="Entrez du texte" title="Champ de texte pour focus">focus</div>');

// Sélectionner ma div :
let selection6 = document.getElementById('input-focus');
// Je vérifie :
console.log(selection6);
// Je l'affiche :
// dw(selection6);

// Je détecte quand il y a un clique sur la div :
selection6.addEventListener('focus', focus);

// Je crée la fonction focus :
function focus() {
	alert('Vous avez sélectionné le champ de la div orange !');
}

dw('</section>');