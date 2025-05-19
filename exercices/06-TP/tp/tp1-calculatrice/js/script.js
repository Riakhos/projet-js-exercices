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

// Ajoute ou retire la classe 'visible' en fonction du survol
form.addEventListener('mouseover', () => form.classList.add('visible'));
form.addEventListener('mouseout', () => form.classList.remove('visible'));

resultatNumber.addEventListener('click', () => {
	console.log('Cliqué !');
	if(operator.value == 'plus') {
		const resultatPlus = parseInt(number1.value) + parseInt(number2.value);
		alert(number1.value + '+' + number2.value + '=' + resultatPlus);
	} else if(operator.value == 'moins') {
		const resultatMoins = parseInt(number1.value) - parseInt(number2.value);
		alert(number1.value + '-' + number2.value + '=' + resultatMoins);
	} else if(operator.value == 'fois') {
		const resultatFois = parseInt(number1.value) * parseInt(number2.value);
		alert(number1.value + '*' + number2.value + '=' + resultatFois);
	} else if(operator.value == 'diviser') {
		const resultatDiviser = parseInt(number1.value) / parseInt(number2.value);
		alert(number1.value + '/' + number2.value + '=' + resultatDiviser);
	} else {
		alert('Message d\'erreur');
	}
})
