// Sélectionne le formulaire
const form = document.querySelector('form');
// Sélectionne le bouton
const bouton = document.querySelector('button');
// Sélectionne les éléments input et le select
const [number1, number2, resultatNumber] = document.querySelectorAll('input');
const operator = document.querySelector('select');
// Objet qui associe chaque opération à son symbole
const symbols = {
	plus: '+',
	moins: '-',
	fois: '*',
	diviser: '/',
};
// Objet qui associe chaque opération à sa fonction de calcul
const operations = {
	plus: (a, b) => a + b,
	moins: (a, b) => a - b,
	fois: (a, b) => a * b,
	diviser: (a, b) => b !== 0 ? a / b : 'Erreur : division par zéro',
};

// Fonction de calcul qui prend deux arguments (arg1, arg2) et un type d'opération (operation).
function calculer(arg1, arg2, operation) {
    //* Convertit les arguments en nombres entiers pour effectuer les calculs.
    const a = parseInt(arg1);
    const b = parseInt(arg2);
    
    //* Vérifie l'opération et effectue le calcul correspondant.
    switch (operation) {
		//? Si l'opération est 'plus', retourne la somme de a et b.
        case 'plus':
            return a + b;
		//? Si l'opération est 'moins', retourne la différence de a et b.
        case 'moins':
            return a - b;
		//? Si l'opération est 'fois', retourne le produit de a et b.
        case 'fois':
            return a * b;
		//? Si l'opération est 'diviser', vérifie si b est différent de 0.
        case 'diviser':
			//! Si b est 0, renvoie un message d'erreur.
            return b !== 0 ? a / b : 'Erreur : division par zéro'; 
		//? Si l'opération est inconnue, renvoie un message d'erreur.
        default:
            return 'Erreur : opération inconnue';
    }
}

// Ajoute ou retire la classe 'visible' en fonction du survol
form.addEventListener('mouseover', () => form.classList.add('visible'));
form.addEventListener('mouseout', () => form.classList.remove('visible'));

// Ajoute un écouteur d'événement 'click' au troisième élément <input>
resultatNumber.addEventListener('click', () => {
	//* Récupère l'opération choisie
    const operation = operator.value;
    //* Appelle la fonction 'calculer' avec les valeurs des deux premiers inputs et l'opération sélectionnée.
    const resultat = calculer(number1.value, number2.value, operation);

    //* Affiche le résultat ou le message d'erreur dans une alerte
    if (typeof resultat === 'number') {
        //? Affiche une alerte avec le calcul et le résultat, par exemple : "3 + 2 = 5".
        alert(`${number1.value} ${symbols[operation]} ${number2.value} = ${resultat}`);
    } else {
        //? Si le résultat n'est pas un nombre (indiquant une erreur), affiche directement le message d'erreur.
        alert(resultat);
    }
});