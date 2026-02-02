// Condition Tracker - Simple +1/-1 Counter with Cookie Persistence
// Version: 1.0 - Clean Implementation

// Cookie Management Functions
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '0';
}

function setCookie(name, value, days = 7) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Update condition displays
function updateConditionDisplays() {
  const characterKey = document.getElementById('character-key').value;
  const maxPhysical = parseInt(document.getElementById('base-physical-condition').value);
  const maxMental = parseInt(document.getElementById('base-mental-condition').value);
  const maxMatrix = parseInt(document.getElementById('matrix-condition')?.value || '0');
  const maxPhysicalWound = parseInt(document.getElementById('max-physical-wound')?.value || '3');
  const maxMentalWound = parseInt(document.getElementById('max-mental-wound')?.value || '3');
  const maxMatrixWound = parseInt(document.getElementById('max-matrix-wound')?.value || '3');
  
  // Get current values from cookies (or 0 if no cookie)
  let physicalDamage = parseInt(getCookie(`${characterKey}_physical_damage`) || '0');
  let mentalDamage = parseInt(getCookie(`${characterKey}_mental_damage`) || '0');
  let matrixDamage = parseInt(getCookie(`${characterKey}_matrix_damage`) || '0');
  
  console.log(`Initializing condition tracker for ${characterKey}: Physical=${physicalDamage}, Mental=${mentalDamage}, Matrix=${matrixDamage}`);
  
  // Calculate wounds (number of wound boxes filled)
  const physicalWounds = maxPhysicalWound > 0 ? Math.floor(physicalDamage / maxPhysicalWound) : 0;
  const mentalWounds = maxMentalWound > 0 ? Math.floor(mentalDamage / maxMentalWound) : 0;
  
  // Update main displays
  document.getElementById('current-physical-condition').textContent = physicalDamage;
  document.getElementById('current-mental-condition').textContent = mentalDamage;
  if (document.getElementById('current-matrix-condition')) {
    document.getElementById('current-matrix-condition').textContent = matrixDamage;
  }
  
  // Update wound counters (modulo calculation)
  if (document.getElementById('physical-wound-counter')) {
    document.getElementById('physical-wound-counter').textContent = `(${physicalWounds})`;
  }
  if (document.getElementById('mental-wound-counter')) {
    document.getElementById('mental-wound-counter').textContent = `(${mentalWounds})`;
  }
  if (document.getElementById('matrix-wound-counter')) {
    document.getElementById('matrix-wound-counter').textContent = `(${matrixWounds})`;
  }
  
  // Update modal displays if modal is open
  if (document.getElementById('modal-physical-condition')) {
    document.getElementById('modal-physical-condition').textContent = physicalDamage;
    if (document.getElementById('modal-physical-wounds')) {
      document.getElementById('modal-physical-wounds').textContent = `(${physicalWounds})`;
    }
  }
  if (document.getElementById('modal-mental-condition')) {
    document.getElementById('modal-mental-condition').textContent = mentalDamage;
    if (document.getElementById('modal-mental-wounds')) {
      document.getElementById('modal-mental-wounds').textContent = `(${mentalWounds})`;
    }
  }
  if (document.getElementById('modal-matrix-condition')) {
    document.getElementById('modal-matrix-condition').textContent = matrixDamage;
    if (document.getElementById('modal-matrix-wounds')) {
      document.getElementById('modal-matrix-wounds').textContent = `(${matrixWounds})`;
    }
  }
}

// Add damage functions
function addPhysicalDamage() {
  const characterKey = document.getElementById('character-key').value;
  const maxDamage = parseInt(document.getElementById('base-physical-condition').value);
  let damage = parseInt(getCookie(`${characterKey}_physical_damage`) || '0');
  
  if (damage < maxDamage) {
    damage++;
    setCookie(`${characterKey}_physical_damage`, damage);
    updateConditionDisplays();
  }
}

function addMentalDamage() {
  const characterKey = document.getElementById('character-key').value;
  const maxDamage = parseInt(document.getElementById('base-mental-condition').value);
  let damage = parseInt(getCookie(`${characterKey}_mental_damage`) || '0');
  
  if (damage < maxDamage) {
    damage++;
    setCookie(`${characterKey}_mental_damage`, damage);
    updateConditionDisplays();
  }
}

// Remove damage functions
function removePhysicalDamage() {
  const characterKey = document.getElementById('character-key').value;
  let damage = parseInt(getCookie(`${characterKey}_physical_damage`) || '0');
  
  if (damage > 0) {
    damage--;
    setCookie(`${characterKey}_physical_damage`, damage);
    updateConditionDisplays();
  }
}

function removeMentalDamage() {
  const characterKey = document.getElementById('character-key').value;
  let damage = parseInt(getCookie(`${characterKey}_mental_damage`) || '0');
  
  if (damage > 0) {
    damage--;
    setCookie(`${characterKey}_mental_damage`, damage);
    updateConditionDisplays();
  }
}

// Reset functions
function resetPhysicalDamage() {
  const characterKey = document.getElementById('character-key').value;
  setCookie(`${characterKey}_physical_damage`, '0');
  updateConditionDisplays();
}

function resetMentalDamage() {
  const characterKey = document.getElementById('character-key').value;
  setCookie(`${characterKey}_mental_damage`, '0');
  updateConditionDisplays();
}

// Matrix damage functions
function addMatrixDamage() {
  const characterKey = document.getElementById('character-key').value;
  // Use base-matrix-condition for the maximum value
  const maxDamage = parseInt(document.getElementById('base-matrix-condition')?.value || '0');
  let damage = parseInt(getCookie(`${characterKey}_matrix_damage`) || '0');
  
  // Only allow incrementing if we haven't reached max
  if (damage < maxDamage) {
    damage++;
    setCookie(`${characterKey}_matrix_damage`, damage);
    updateConditionDisplays();
  }
}

function removeMatrixDamage() {
  const characterKey = document.getElementById('character-key').value;
  let damage = parseInt(getCookie(`${characterKey}_matrix_damage`) || '0');
  
  if (damage > 0) {
    damage--;
    setCookie(`${characterKey}_matrix_damage`, damage);
    updateConditionDisplays();
  }
}

function resetMatrixDamage() {
  const characterKey = document.getElementById('character-key').value;
  setCookie(`${characterKey}_matrix_damage`, '0');
  updateConditionDisplays();
}

// Force reset all counters to zero (for new sessions)
function resetAllConditions() {
  const characterKey = document.getElementById('character-key').value;
  setCookie(`${characterKey}_physical_damage`, '0');
  setCookie(`${characterKey}_mental_damage`, '0');
  setCookie(`${characterKey}_matrix_damage`, '0');
  updateConditionDisplays();
  console.log(`All conditions reset to zero for ${characterKey}`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize displays
  updateConditionDisplays();
  
  // Set up modal event listeners
  const conditionModal = document.getElementById('conditionModal');
  if (conditionModal) {
    conditionModal.addEventListener('shown.bs.modal', function (event) {
      const button = event.relatedTarget;
      const conditionType = button.getAttribute('data-condition-type');
      
      // Show correct tab based on which condition monitor was clicked
      if (conditionType === 'physical') {
        const physicalTab = new bootstrap.Tab(document.getElementById('physical-tab'));
        physicalTab.show();
      } else if (conditionType === 'mental') {
        const mentalTab = new bootstrap.Tab(document.getElementById('mental-tab'));
        mentalTab.show();
      } else if (conditionType === 'matrix') {
        const matrixTab = new bootstrap.Tab(document.getElementById('matrix-tab'));
        matrixTab.show();
      }
    });
  }
  
  // Set up button event listeners
  document.getElementById('modal-add-physical-damage')?.addEventListener('click', addPhysicalDamage);
  document.getElementById('modal-remove-physical-damage')?.addEventListener('click', removePhysicalDamage);
  document.getElementById('modal-reset-physical-damage')?.addEventListener('click', resetPhysicalDamage);
  document.getElementById('modal-add-mental-damage')?.addEventListener('click', addMentalDamage);
  document.getElementById('modal-remove-mental-damage')?.addEventListener('click', removeMentalDamage);
  document.getElementById('modal-reset-mental-damage')?.addEventListener('click', resetMentalDamage);
  document.getElementById('modal-add-matrix-damage')?.addEventListener('click', addMatrixDamage);
  document.getElementById('modal-remove-matrix-damage')?.addEventListener('click', removeMatrixDamage);
  document.getElementById('modal-reset-matrix-damage')?.addEventListener('click', resetMatrixDamage);
});