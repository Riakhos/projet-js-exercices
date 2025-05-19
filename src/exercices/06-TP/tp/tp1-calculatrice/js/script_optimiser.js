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

// Sélectionne le formulaire et le bouton avec des ID uniques
const form = document.getElementById('calculatrice-form');
const bouton = document.getElementById('toggle-calc-btn');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operator = document.getElementById('operation');
const submitBtn = document.getElementById('calculer-btn');

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

// Fonction de calcul
function calculer(arg1, arg2, operation) {
    const a = parseFloat(arg1);
    const b = parseFloat(arg2);
    if(isNaN(a) || isNaN(b)) return 'Erreur : valeurs invalides';
    //* Vérifie si l'opération existe dans l'objet 'operations'
    return operations[operation] ? operations[operation](a, b) : 'Erreur : opération inconnue';
}

// Affiche/masque la calculatrice
bouton.addEventListener('click', () => {
    const visible = form.classList.toggle('visible');
    bouton.innerHTML = visible? 'Faire disparaître la calculatrice' : 'Faire apparaître la calculatrice';    
})

// Ajoute un écouteur d'événement 'click' au troisième input
submitBtn.addEventListener('click', (Event) => {
    // Empêche la soumission du formulaire
    Event.preventDefault();
    const operation = operator.value;
    const resultat = calculer(number1.value, number2.value, operation);
    
    //* Affiche le résultat ou le message d'erreur dans une alerte
    alert(typeof resultat === 'number'?
        `${number1.value} ${symbols[operation]} ${number2.value} = ${resultat}` 
        : resultat);
    //* Réinitialise les valeurs des inputs après le calcul
    number1.value = '';
    number2.value = '';
});