// Fonction pour changer de page
function showPage(pageId) {
    // Cache toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Affiche la page demandée
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Met à jour le menu (active-nav)
    const navButtons = document.querySelectorAll('.nav-links button');
    navButtons.forEach(btn => {
        btn.classList.remove('active-nav');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(pageId)) {
            btn.classList.add('active-nav');
        }
    });

    // Remonte en haut de page
    window.scrollTo(0, 0);
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Par défaut, on montre l'accueil
    showPage('accueil');
});
