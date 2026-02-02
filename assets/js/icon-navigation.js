/**
 * Icon Navigation - Gestion de la navigation entre les icônes et les onglets
 * 
 * Ce script permet d'ouvrir le volet flottant sur l'onglet correspondant
 * lorsque l'on clique sur une icône dans la barre verticale.
 */
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner toutes les icônes dans la barre verticale
  const iconWrappers = document.querySelectorAll('.sidebar-toggle .icon-wrapper');
  
  // Si aucune icône n'est trouvée, quitter
  if (iconWrappers.length === 0) return;
  
  // Ajouter des gestionnaires d'événements pour chaque icône
  iconWrappers.forEach((wrapper) => {
    wrapper.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Récupérer l'onglet à activer depuis l'attribut data-tab
      const tabId = this.getAttribute('data-tab');
      
      // Stocker l'onglet à activer dans un attribut data pour le récupérer plus tard
      if (tabId) {
        this.setAttribute('data-target-tab', tabId);
      }
    });
  });
  
  // Écouter l'événement 'shown.bs.offcanvas' pour activer l'onglet approprié
  const offcanvasElement = document.getElementById('floatingPanel');
  if (offcanvasElement) {
    offcanvasElement.addEventListener('shown.bs.offcanvas', function() {
      // Trouver l'icône qui a déclenché l'ouverture
      const activeIcon = document.querySelector('.sidebar-toggle .icon-wrapper[data-target-tab]');
      
      if (activeIcon) {
        const targetTab = activeIcon.getAttribute('data-target-tab');
        
        // Activer l'onglet correspondant
        const tabButton = document.querySelector(`button[data-bs-target="#${targetTab}"]`);
        if (tabButton) {
          // Désactiver tous les onglets et panneaux
          const allTabs = document.querySelectorAll('.nav-link, .tab-pane');
          allTabs.forEach(element => {
            element.classList.remove('active', 'show');
          });
          
          // Activer l'onglet et le panneau cibles
          tabButton.classList.add('active');
          document.getElementById(targetTab).classList.add('show', 'active');
        }
        
        // Nettoyer l'attribut data pour les prochaines ouvertures
        activeIcon.removeAttribute('data-target-tab');
      }
    });
    
    // Gérer la fermeture du volet glissant pour supprimer l'ombre résiduelle
    offcanvasElement.addEventListener('hidden.bs.offcanvas', function() {
      // Supprimer le backdrop manuellement si nécessaire
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      
      // Supprimer les classes de flou si elles existent
      const body = document.querySelector('body');
      if (body) {
        body.classList.remove('offcanvas-open');
      }
    });
    
    // Gérer les clics à l'extérieur pour une fermeture propre
    document.addEventListener('click', function(e) {
      // Vérifier si le clic est à l'extérieur du volet glissant
      if (offcanvasElement.classList.contains('show') && 
          !offcanvasElement.contains(e.target) && 
          !e.target.closest('.sidebar-toggle')) {
        
        // Fermer le volet glissant via Bootstrap
        const bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (bootstrapOffcanvas) {
          bootstrapOffcanvas.hide();
        }
      }
    });
  }
});