/**
 * Program Highlight - Gestion de la mise en surbrillance des programmes
 * 
 * Ce script permet de mettre en surbrillance certains programmes dans la liste
 * en ajoutant/supprimant une classe CSS.
 */

// Fonctions pour gérer les cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${JSON.stringify(value)};${expires};path=/`;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les éléments de programme dans la liste
  const programItems = document.querySelectorAll('#matrix-programs .list-group-item, #matrix-programs .py-1');
  
  // Si aucun programme n'est trouvé, quitter
  if (programItems.length === 0) return;
  
  // Ajouter des gestionnaires d'événements pour chaque programme
  programItems.forEach((item) => {
    // Vérifier si l'élément est un programme (a un enfant span avec le nom du programme)
    const programSpan = item.querySelector('span:first-child');
    if (programSpan) {
      item.addEventListener('click', function(e) {
        // Basculer la classe de surbrillance
        this.classList.toggle('program-highlight');
        
        // Stocker l'état dans un cookie pour persistance
        const programName = programSpan.textContent.trim();
        const highlightedPrograms = JSON.parse(getCookie('highlightedPrograms') || '[]');
        
        if (this.classList.contains('program-highlight')) {
          // Ajouter à la liste si pas déjà présent
          if (!highlightedPrograms.includes(programName)) {
            highlightedPrograms.push(programName);
          }
        } else {
          // Retirer de la liste
          const index = highlightedPrograms.indexOf(programName);
          if (index > -1) {
            highlightedPrograms.splice(index, 1);
          }
        }
        
        setCookie('highlightedPrograms', highlightedPrograms, 30);
        
        // Mettre à jour la visibilité du bouton
        updateClearButtonVisibility();
      });
    }
  });
  
  // Fonction pour mettre à jour la visibilité du bouton
  function updateClearButtonVisibility() {
    const hasHighlighted = document.querySelectorAll('.program-highlight').length > 0;
    const clearButton = document.getElementById('clear-program-highlight');
    if (clearButton) {
      clearButton.style.display = hasHighlighted ? 'inline-block' : 'none';
    }
  }
  
  // Charger les programmes mis en surbrillance depuis le cookie
  const highlightedPrograms = JSON.parse(getCookie('highlightedPrograms') || '[]');
  
  if (highlightedPrograms.length > 0) {
    programItems.forEach((item) => {
      const programSpan = item.querySelector('span:first-child');
      if (programSpan) {
        const programName = programSpan.textContent.trim();
        if (highlightedPrograms.includes(programName)) {
          item.classList.add('program-highlight');
        }
      }
    });
  }
  
  // Ajouter un bouton pour effacer toutes les surbrillances
  const clearButton = document.createElement('button');
  clearButton.id = 'clear-program-highlight';
  clearButton.className = 'btn btn-sm btn-outline-danger mt-2';
  clearButton.textContent = 'Effacer la surbrillance';
  clearButton.style.display = highlightedPrograms.length > 0 ? 'inline-block' : 'none';
  
  clearButton.addEventListener('click', function() {
    // Retirer la classe de tous les éléments
    programItems.forEach((item) => {
      item.classList.remove('program-highlight');
    });
    
    // Effacer le cookie
    deleteCookie('highlightedPrograms');
    
    // Masquer le bouton
    clearButton.style.display = 'none';
  });
  
  // Trouver un endroit pour ajouter le bouton (après le titre Programmes)
  const programsTitle = document.querySelector('#matrix-programs');
  if (programsTitle) {
    // Insérer le bouton au début de la section des programmes
    if (programsTitle.firstChild) {
      programsTitle.insertBefore(clearButton, programsTitle.firstChild);
    } else {
      programsTitle.appendChild(clearButton);
    }
  }
});