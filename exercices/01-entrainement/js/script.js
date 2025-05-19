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
    document.getElementById('main-content').insertAdjacentHTML('beforeend', html);
}

function showResult(contenu, explication, code = '', extraClass = '') {
    let tooltip = explication;
    if (code) {
        tooltip += "\n\nCode :\n" + code;
    }
    dw('<div class="exo-result ' + extraClass + '" data-tooltip="' + tooltip.replace(/"/g, '&quot;') + '">' + contenu + '</div>');
}

/**
 * ------------------ 01 - Commentaire, Affichage, Concaténation -----------------
 */
dw('<section class="exo"><h2>01. Commentaire, Affichage, Concaténation</h2>');

console.log('Hello');

showResult('Bonjour tous le monde', "Affiche une phrase de bienvenue.", "showResult('Bonjour tous le monde', 'Affiche une phrase de bienvenue.', showResult('...');)");

dw('</section>');

/**
 * ---------------- 02 - Variables, Constantes, Type de données ------------------
 */
dw('<section class="exo"><h2>02 - Variables, Constantes, Type de données</h2>');

var pays = 'France';
showResult(pays, "Affiche la valeur de la variable pays.", "var pays = 'France';\nshowResult(pays, 'Affiche la valeur de la variable pays.', var pays = 'France';showResult('...');)");

var prenom = 'Bruce', nom = 'Wayne';
showResult(prenom + ' ' + nom, "Concatène le prénom et le nom.", "var prenom = 'Bruce', nom = 'Wayne';\nshowResult(prenom + ' ' + nom, Concatène le prénom et le nom., var prenom = 'Bruce', nom = 'Wayne'; showResult('...');)");

prenom = 'Brice';
showResult(prenom + ' ' + nom, "Affiche la nouvelle valeur de la variable prenom.", "prenom = 'Brice';\nshowResult(prenom + ' ' + nom, Affiche la nouvelle valeur de la variable prenom., prenom = 'Brice'; showResult('...');)");

var fruit = 'pomme';
showResult(fruit, "Affiche la valeur initiale de la variable fruit.", "var fruit = 'pomme';\nshowResult(fruit, Affiche la valeur initiale de la variable fruit., var fruit = 'pomme'; showResult('...');)");

fruit += ' ';
fruit += 'fraise';
showResult(fruit, "Ajoute 'fraise' à la variable fruit.", "fruit += ' ';\nfruit += 'fraise';\nshowResult(fruit, Ajoute 'fraise' à la variable fruit., fruit += ' '; fruit += 'fraise'; showResult(...);)");

const Ville = 'Paris';
showResult(Ville, "Affiche la valeur de la constante Ville.", "const Ville = 'Paris';\nshowResult(Ville, Affiche la valeur de la constante Ville., const Ville = 'Paris'; showResult(...);)");

showResult(typeof(pays), "Affiche le type de la variable pays.", "showResult(typeof(pays), Affiche le type de la variable pays., showResult(...);)");

var chiffre = 123;
showResult(typeof(chiffre), "Affiche le type de la variable chiffre.", "var chiffre = 123;\nshowResult(typeof(chiffre), Affiche le type de la variable chiffre., var chiffre = 123; showResult(...);)");

console.log('type de chiffre : ' + typeof(chiffre) + ' / ' + 'type de pays : ' + typeof(Ville));

dw('</section>');

/**
 * ---------------- 03 - Opérateurs ------------------
 */
dw('<section class="exo"><h2>03 - Opérateurs</h2>');

var resultat = 10 + 5;
showResult('10 + 5 = ' + resultat, "Addition de 10 et 5.", "var resultat = 10 + 5;\nshowResult('10 + 5 = ' + resultat, Addition de 10 et 5., resultat = 10 + 5; showResult(...);)");

resultat = 10 - 5;
showResult('10 - 5 = ' + resultat, "Soustraction de 10 et 5.", "resultat = 10 - 5;\nshowResult('10 - 5 = ' + resultat, Soustraction de 10 et 5., resultat = 10 - 5; showResult(...);)");

resultat = 10 / 5;
showResult('10 / 5 = ' + resultat, "Division de 10 par 5.", "resultat = 10 / 5;\nshowResult('10 / 5 = ' + resultat, Division de 10 par 5., resultat = 10 / 5; showResult(...);)");

resultat = 10 * 5;
showResult('10 * 5 = ' + resultat, "Multiplication de 10 par 5.", "resultat = 10 * 5;\nshowResult('10 * 5 = ' + resultat, Multiplication de 10 par 5., resultat = 10 * 5; showResult(...);)");

var chiffre1 = 5;
chiffre1 += 13;
showResult('5 + 13 = ' + chiffre1, "Ajout de 13 à la variable chiffre1.", "var chiffre1 = 5;\nchiffre1 += 13;\nshowResult('5 + 13 = ' + chiffre1, Ajout de 13 à la variable chiffre1., chiffre1 = 5; chiffre1 += 13; showResult(...);)");

dw('</section>');

/**
 * ---------------- 04 - Conditions ---------------
 */
dw('<section class="exo"><h2>04 - Conditions</h2>');

var a = 10, b = 5, c = 2;
if (a > b) {
  showResult('A est supérieur à B', "Condition : a > b", "var a = 10, b = 5, c = 2;\nif (a > b) {\n  showResult(''A est supérieur à B', 'Condition : a > b'');\n} else {\n  showResult('A n\'est pas supérieur à B', 'Condition : a <= b');\n}");
} else {
  showResult('A n\'est pas supérieur à B', "Condition : a <= b", "var a = 10, b = 5, c = 2;\nif (a > b) {\n  showResult('A est supérieur à B', 'Condition : a > b');\n} else {\n  showResult('A n\'est pas supérieur à B', 'Condition : a <= b');\n}");
}

if (a > b && b > c) {
  showResult('A est supérieur à B et B est supérieur à C', "Condition : a > b && b > c", "if (a > b && b > c) {\n  showResult('A est supérieur à B et B est supérieur à C', 'Condition : a > b && b > c');\n}");
}

if (a == 9 || b > c) {
  showResult('A est égal à 9 ou B est supérieur à C', "Condition : a == 9 || b > c", "if (a == 9 || b > c) {\n  showResult('A est égal à 9 ou B est supérieur à C', 'Condition : a == 9 || b > c');\n}");
}

if (a == 8) {
  showResult('A est égal à 8', "Condition : a == 8", "if (a == 8) {\n  showResult('A est égal à 8', 'Condition : a == 8');\n}");
} else if (a != 10) {
  showResult('A est différent de 10', "Condition : a != 10", "if (a != 10) {\n  showResult('A est différent de 10', 'Condition : a != 10');\n}");
} else {
  showResult('Condition par défaut', "Aucune condition précédente n'est vraie", "else {\n  showResult('Condition par défaut', 'Aucune condition précédente n\'est vraie');\n}");
}

var vara = 1, varb = '1';
if (vara == varb) {
  showResult('vara et varb ont la même valeur', "Comparaison avec ==", "if (vara == varb) {\n  showResult('vara et varb ont la même valeur', 'Comparaison avec ==');\n}");
}

if (vara === varb) {
  showResult('vara et varb ont la même valeur et le même type', "Comparaison avec ===", "if (vara === varb) {\n  showResult('vara et varb ont la même valeur et le même type', 'Comparaison avec ===');\n}");
}

dw('</section>');

/**
 * ---------------- 05 - Boucles ---------------
 */
dw('<section class="exo"><h2>05 - Boucles</h2>');

var i = 1;
let boucle1 = '';
while (i <= 5) {
  boucle1 += 'Bonjour---';
  i++;
}
showResult(boucle1, "Affiche 'Bonjour---' cinq fois grâce à une boucle while.", "let boucle1 = '';\nwhile (i <= 5) {\n  boucle1 += 'Bonjour---';\n  i++;\n}\nshowResult(boucle1, Affiche 'Bonjour---' cinq fois grâce à une boucle while., let boucle1 = '';while (i <= 5) {  boucle1 += 'Bonjour---';  i++;} showResult(...);)");

i = 1;
let boucle2 = '';
while (i <= 5) {
  boucle2 += 'Bonjour';
  if (i < 5) {
    boucle2 += '---';
  }
  i++;
}
showResult(boucle2, "Affiche 'Bonjour' cinq fois séparé par '---', sans '---' à la fin.", "let boucle2 = '';\nwhile (i <= 5) {\n  boucle2 += 'Bonjour';\n  if (i < 5) {\n    boucle2 += '---';\n  }\n  i++;\n}\nshowResult(boucle2, Affiche 'Bonjour' cinq fois séparé par '---', sans '---' à la fin., let boucle2 = '';while (i <= 5) {  boucle2 += 'Bonjour';  if (i < 5) {    boucle2 += '---';  }  i++;} showResult(...);)");

let boucle3 = '';
for (let index = 1; index <= 5; index++) {
  boucle3 += 'Bonjour---';
}
showResult(boucle3, "Affiche 'Bonjour---' cinq fois grâce à une boucle for.", "let boucle3 = '';\nfor (let index = 1; index <= 5; index++) {\n  boucle3 += 'Bonjour---';\n}\nshowResult(boucle3, Affiche 'Bonjour---' cinq fois grâce à une boucle for., let boucle3 = '';for (let index = 1; index <= 5; index++) {  boucle3 += 'Bonjour---';} showResult(...);)");

let selectHtml = '<select>';
for (let i = 1; i <= 31; i++) {
  selectHtml += '<option>' + i +'</option>';
}
selectHtml += '</select>';
showResult(selectHtml, "Affiche une liste déroulante de 1 à 31.", "let selectHtml = '<select>';\nfor (let i = 1; i <= 31; i++) {\n  selectHtml += '<option>' + i +'</option>';\n}\nselectHtml += '</select>';\nshowResult(selectHtml, Affiche une liste déroulante de 1 à 31., let selectHtml = '<select>';for (let i = 1; i <= 31; i++) {  selectHtml += '<option>' + i +'</option>'; }selectHtml += '</select>'; showResult(...);)");

let boucle4 = '';
for (let index = 1; index <= 100; index++){
  boucle4 += index + ' ';
}
showResult(boucle4.trim(), "Affiche les nombres de 1 à 100 avec une boucle for.", "let boucle4 = '';\nfor (let index = 1; index <= 100; index++){\n  boucle4 += index + ' ';\n}\nshowResult(boucle4.trim(), Affiche les nombres de 1 à 100 avec une boucle for., let boucle4 = '';for (let index = 1; index <= 100; index++){  boucle4 += index + ' ';} showResult(...);)");

i = 1;
let boucle5 = '';
while (i <= 100) {
  boucle5 += i + ' ';
  i++;
}
showResult(boucle5.trim(), "Affiche les nombres de 1 à 100 avec une boucle while.", "let boucle5 = '';\nwhile (i <= 100) {\n  boucle5 += i + ' ';\n  i++;\n}\nshowResult(boucle5.trim(), Affiche les nombres de 1 à 100 avec une boucle while., let boucle5 = '';while (i <= 100) {  boucle5 += i + ' ';  i++;} showResult(...);)");

dw('</section>');

/**
 * ---------------- 06 - Fonctions (Prédéfinies et Utilisateurs) ---------------
 */
dw('<section class="exo"><h2>06 - Fonctions (Prédéfinies et Utilisateurs)</h2>');

let phrase = 'Bonsoir';

showResult(phrase, "Affiche la variable phrase.", "let phrase = 'Bonsoir';\nshowResult(phrase, Affiche la variable phrase., let phrase = 'Bonsoir'; showResult(...);)");

showResult(phrase.toLowerCase(), "Affiche la variable phrase en minuscules.", "showResult(phrase.toLowerCase(), Affiche la variable phrase en minuscules., showResult(phrase.toLowerCase(), 'Affiche la variable phrase en minuscules.', showResult(...);)");

showResult(phrase.length, "Affiche le nombre de caractères de la variable phrase.", "showResult(phrase.length, Affiche le nombre de caractères de la variable phrase., showResult(phrase.length, 'Affiche le nombre de caractères de la variable phrase.', showResult(...);)");

showResult(phrase.substring(0, 3), "Affiche les 3 premières lettres de la variable phrase.", "showResult(phrase.substring(0, 3), Affiche les 3 premières lettres de la variable phrase., showResult(phrase.substring(0, 3), 'Affiche les 3 premières lettres de la variable phrase.', showResult(...);)");

function maFonction() {
  showResult('Salut !', "Affiche 'Salut !' depuis une fonction utilisateur.", "function maFonction() {\n  showResult('Salut !', Affiche 'Salut !' depuis une fonction utilisateur., function maFonction() { showResult('Salut !', 'Affiche 'Salut !' depuis une fonction utilisateur.', showResult(...);)}\nmaFonction();");
}
maFonction();

function afficheTexte(texte) {
  showResult(texte, "Affiche le texte passé en paramètre à la fonction.", "function afficheTexte(texte) {\n  showResult(texte, Affiche le texte passé en paramètre à la fonction., function afficheTexte(texte) { showResult(texte, 'Affiche le texte passé en paramètre à la fonction.', showResult(...);)\n}\nafficheTexte('Hello');");
}
afficheTexte('Hello');

function test2() {
  let animal2 = 'chien'; // Variable Locale 
  animal3 = 'poisson'; // Variable Globale
}
test2();
showResult(animal3, "Affiche la variable globale animal3.", "function test2() {\n  let animal2 = 'chien'; // Variable Locale \n  animal3 = 'poisson'; // Variable Globale\n}\ntest2();\nshowResult(animal3, Affiche la variable globale animal3., function test2() { let animal2 = 'chien'; animal3 = 'poisson'; } test2(); showResult(...);)");

dw('</section>');

/**
 * ---------------- 07 - Array ---------------
 */
dw('<section class="exo"><h2>07 - Array</h2>');

let liste_fruits = ['pomme', 'fraise', 'framboise', 'banane', 'orange'];
console.log(liste_fruits);

showResult(liste_fruits[0], "Affiche le premier élément de l'array.", "let liste_fruits = ['pomme', 'fraise', 'framboise', 'banane', 'orange'];\nconsole.log(liste_fruits);\nshowResult(liste_fruits[0], Affiche le premier élément de l'array., let liste_fruits = ['pomme', 'fraise', 'framboise', 'banane', 'orange']; console.log(liste_fruits); showResult(...);)");

showResult(liste_fruits[2], "Affiche le troisième élément de l'array (framboise).", "showResult(liste_fruits[2], Affiche le troisième élément de l'array (framboise)., showResult(liste_fruits[2], 'Affiche le troisième élément de l'array (framboise).', showResult(...);)");

showResult(liste_fruits[0] + ' ' + liste_fruits[1], "Affiche le premier et le deuxième élément de l'array.", "showResult(liste_fruits[0] + ' ' + liste_fruits[1], Affiche le premier et le deuxième élément de l'array., showResult(liste_fruits[0] + ' ' + liste_fruits[1], 'Affiche le premier et le deuxième élément de l'array.', showResult(...);)");

showResult(liste_fruits.length, "Affiche le nombre d'éléments de l'array.", "showResult(liste_fruits.length, Affiche le nombre d'éléments de l'array., showResult(liste_fruits.length, 'Affiche le nombre d\'éléments de l\'array.', showResult(...);)");

showResult(liste_fruits.join(', '), "Affiche tous les éléments de l'array sous forme de liste.", "showResult(liste_fruits.join(', '), 'Affiche tous les éléments de l\\'array sous forme de liste.', showResult(...););");

let htmlFruits = '';
for (let index = 0; index < liste_fruits.length; index++) {
  htmlFruits += liste_fruits[index] + ', ';
}
showResult(htmlFruits, "Affiche tous les éléments de l'array grâce à une boucle.", "let htmlFruits = '';\nfor (let index = 0; index < liste_fruits.length; index++) {\n  htmlFruits += liste_fruits[index] + ', ';\n}\nshowResult(htmlFruits, Affiche tous les éléments de l'array grâce à une boucle., let htmlFruits = '';for (let index = 0; index < liste_fruits.length; index++) {  htmlFruits += liste_fruits[index] + ', ';} showResult(...);)");

let htmlIndices = '';
for(var j in liste_fruits) {
  htmlIndices += j + ' : ' + liste_fruits[j] + ', ';
}
showResult(htmlIndices, "Affiche les indices et les éléments de l'array.", "let htmlIndices = '';\nfor(var j in liste_fruits) {\n  htmlIndices += j + ' : ' + liste_fruits[j] + ', ';\n}\nshowResult(htmlIndices, Affiche les indices et les éléments de l'array., let htmlIndices = '';for(var j in liste_fruits) {  htmlIndices += j + ' : ' + liste_fruits[j] + ', ';} showResult(...);)");

let liste_fruits2 = [['fraise', 'pomme'], ['tomate', 'mangue']];
showResult(liste_fruits2[0][1], "Affiche 'pomme' depuis un tableau multidimensionnel.", "let liste_fruits2 = [['fraise', 'pomme'], ['tomate', 'mangue']];\nshowResult(liste_fruits2[0][1], Affiche 'pomme' depuis un tableau multidimensionnel., let liste_fruits2 = [['fraise', 'pomme'], ['tomate', 'mangue']]; showResult(...);)");

dw('</section>');

/**
 * ---------------- 08 - Object ---------------
 */
dw('<section class="exo"><h2>08 - Object</h2>');

let monObjet = {};
monObjet.prenom = 'Bruce';
monObjet.nom = 'Wayne';
monObjet.age = 25;
showResult(monObjet.prenom, "Affiche la propriété prénom de l'objet monObjet.", "let monObjet = {};\nmonObjet.prenom = 'Bruce';\nmonObjet.nom = 'Wayne';\nmonObjet.age = 25;\nshowResult(monObjet.prenom, Affiche la propriété prénom de l'objet monObjet., let monObjet = {};monObjet.prenom = 'Bruce';monObjet.nom = 'Wayne';monObjet.age = 25; showResult(...);)");

let homme = {
  nom : 'Stark',
  prenom : 'Ned',
  age : 35
};
showResult(homme.prenom, "Affiche la propriété prénom de l'objet homme.", "let homme = {};\nhomme.nom = 'Stark';\nhomme.prenom = 'Ned';\nhomme.age = 35;\nshowResult(homme.prenom, Affiche la propriété prénom de l'objet homme., let homme = {};homme.nom = 'Stark';homme.prenom = 'Ned';homme.age = 35; showResult(...);)");

let voiture = {
  marque : 'mercedes',
  modele : 'classe A',
  couleur : 'noir',
  changeDeCouleur : function(nouvelle) {
    voiture.couleur = nouvelle;
  },
  optionsDeSerie : ['clim', 'autoradio', 'park-assist'],
  annee : 2017,
  motorisation : {
    energie : 'diesel',
    puissance : '110 cv'
  }
};
showResult(voiture.marque, "Affiche la marque de la voiture.", "let voiture = {\nvoiture.marque = 'mercedes';\nvoiture.modele = 'classe A';\nvoiture.couleur = 'noir';\nchangeDeCouleur : function(nouvelle) {\nvoiture.couleur = nouvelle;},\noptionsDeSerie : ['clim', 'autoradio', 'park-assist'],\nannee : 2017\nmotorisation : {\nenergie : 'diesel',\npuissance : '110 cv'}};\nshowResult(voiture.marque, Affiche la marque de la voiture., let voiture = {};voiture.marque = 'mercedes';voiture.modele = 'classe A';voiture.couleur = 'noir'; showResult(...);)");

showResult(voiture.couleur, "Affiche la couleur de la voiture.", "showResult(voiture.couleur, Affiche la couleur de la voiture., showResult(voiture.couleur, 'Affiche la couleur de la voiture.', showResult(...););");

voiture.changeDeCouleur('bleu');
showResult(voiture.couleur, "Change la couleur de la voiture en bleu et l'affiche.", "voiture.changeDeCouleur('bleu');\nshowResult(voiture.couleur, Change la couleur de la voiture en bleu et l'affiche., voiture.changeDeCouleur('bleu'); showResult(...);)");

showResult(voiture.optionsDeSerie[0], "Affiche la première option de série de la voiture.", "showResult(voiture.optionsDeSerie[0], Affiche la première option de série de la voiture., showResult(voiture.optionsDeSerie[0], 'Affiche la première option de série de la voiture.', showResult(...););");

let htmlOptions = '';
for (let index = 0; index < voiture.optionsDeSerie.length; index++) {
  htmlOptions += voiture.optionsDeSerie[index] + '<br>';
}
showResult(htmlOptions, "Affiche toutes les options de série de la voiture grâce à une boucle.", "let htmlOptions = '';\nfor (let index = 0; index < voiture.optionsDeSerie.length; index++) {\n  htmlOptions += voiture.optionsDeSerie[index] + '<br>';\n}\nshowResult(htmlOptions, Affiche toutes les options de série de la voiture grâce à une boucle., let htmlOptions = '';for (let index = 0; index < voiture.optionsDeSerie.length; index++) {  htmlOptions += voiture.optionsDeSerie[index] + '<br>'; }showResult(...);)", "top-tooltip");

showResult(voiture.motorisation.energie, "Affiche l'énergie de la motorisation de la voiture.", "showResult(voiture.motorisation.energie, Affiche l'énergie de la motorisation de la voiture., showResult(voiture.motorisation.energie, 'Affiche l'énergie de la motorisation de la voiture.', showResult(...););", "top-tooltip");

function Animal(nom, espece, categorie, age) {
  this.nom = nom,
  this.espece = espece,
  this.categorie = categorie,
  this.age = age
}
let dauphin = new Animal('Flipper', 'dauphin', 'mammifere', 3);
showResult(dauphin.nom, "Affiche le nom de l'animal créé avec un constructeur.", "function Animal(nom, espece, categorie, age) {\n  this.nom = nom,\n  this.espece = espece,\n  this.categorie = categorie,\n  this.age = age\n}\nlet dauphin = new Animal('Flipper', 'dauphin', 'mammifere', 3);\nshowResult(dauphin.nom, Affiche le nom de l'animal créé avec un constructeur., function Animal(nom, espece, categorie, age) { this.nom = nom; this.espece = espece; this.categorie = categorie; this.age = age;} let dauphin = new Animal('Flipper', 'dauphin', 'mammifere', 3); showResult(...);)", "top-tooltip");

dw('</section>');