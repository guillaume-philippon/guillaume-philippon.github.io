document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner toutes les icônes dans la barre verticale
  const iconWrappers = document.querySelectorAll('.sidebar-toggle .icon-wrapper');
  
  // Ajouter des gestionnaires d'événements pour chaque icône
  iconWrappers.forEach((wrapper) => {
    wrapper.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Récupérer l'onglet à activer depuis l'attribut data-tab
      const tabId = this.getAttribute('data-tab');
      
      // Stocker l'onglet à activer dans un attribut data
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
          // Désactiver tous les onglets
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('show', 'active');
          });
          
          // Activer l'onglet cible
          tabButton.classList.add('active');
          document.getElementById(targetTab).classList.add('show', 'active');
        }
        
        // Supprimer l'attribut data pour les prochaines ouvertures
        activeIcon.removeAttribute('data-target-tab');
      }
    });
  }
});