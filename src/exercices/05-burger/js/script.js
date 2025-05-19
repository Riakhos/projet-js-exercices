document.addEventListener("DOMContentLoaded", () => {
    /**
     * Fonction utilitaire pour gérer l'ouverture/fermeture d'un menu burger responsive
     * @param {string} burgerSelector - Sélecteur du bouton burger (ex : '#burger-menu')
     * @param {string} navSelector - Sélecteur du menu de navigation associé (ex : '.main-nav')
     */
    function setupBurger(burgerSelector, navSelector) {
        // Sélectionne le bouton burger et le menu de navigation
        const burger = document.querySelector(burgerSelector);
        const nav = document.querySelector(navSelector);

        // Vérifie que les deux éléments existent
        if (burger && nav) {
            // Gestion du clic sur le burger
            burger.addEventListener('click', () => {
                nav.classList.toggle('active'); // Bascule la classe active sur le menu

                if (nav.classList.contains('active')) {
                    // Si le menu est ouvert : change l'icône et affiche le menu
                    burger.src = 'img/close.png';
                    nav.style.display = 'block';
                } else {
                    // Si le menu est fermé : remet l'icône burger et masque le menu
                    burger.src = 'img/burger.png';
                    nav.style.display = 'none';
                }
            });

            // Au chargement, masque le menu sur mobile
            if (window.innerWidth <= 660) {
                nav.style.display = 'none';
            }

            // Gère l'affichage du menu lors du redimensionnement de la fenêtre
            window.addEventListener('resize', () => {
                if (window.innerWidth > 660) {
                    // Sur desktop : affiche le menu et réinitialise l'icône
                    nav.style.display = '';
                    nav.classList.remove('active');
                    burger.src = 'img/burger.png';
                } else {
                    // Sur mobile : masque le menu et réinitialise l'icône
                    nav.style.display = 'none';
                    nav.classList.remove('active');
                    burger.src = 'img/burger.png';
                }
            });
        } else {
            // Affiche une erreur si les éléments ne sont pas trouvés
            console.error(`L'élément ${burgerSelector} ou ${navSelector} n'a pas été trouvé`);
        }
    }

    // Initialise le menu burger principal
    setupBurger('#burger-menu', '.main-nav');
    // Initialise un second menu burger si besoin (exemple : sous-menu)
    setupBurger('.mobile', '.sub-nav');
});