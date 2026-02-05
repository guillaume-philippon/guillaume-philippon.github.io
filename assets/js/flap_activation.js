// Script to activate the appropriate tab in the floating panel
// based on the character's available sections

document.addEventListener('DOMContentLoaded', function() {
    // Check which sections are available and activate the appropriate tab
    const cyberwareExists = document.querySelector('#cyberware-tab') !== null;
    const spellsExists = document.querySelector('#spells-tab') !== null;
    const powersExists = document.querySelector('#powers-tab') !== null;
    const qualitiesExists = document.querySelector('#qualities-tab') !== null;
    const commlinkExists = document.querySelector('#commlink-tab') !== null;

    // Determine which tab should be active by default
    let activeTab = 'gear'; // Default to gear tab
    
    if (cyberwareExists) {
        activeTab = 'cyberware';
    } else if (spellsExists) {
        activeTab = 'spells';
    } else if (powersExists) {
        activeTab = 'powers';
    } else if (qualitiesExists) {
        activeTab = 'qualities';
    } else if (commlinkExists) {
        activeTab = 'commlink';
    }

    // Activate the appropriate tab
    const tabButton = document.querySelector(`[data-bs-target="#${activeTab}"]`);
    const tabPane = document.querySelector(`#${activeTab}`);
    
    if (tabButton && tabPane) {
        // Remove active class from all tabs
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.classList.remove('active');
        });
        document.querySelectorAll('.tab-pane').forEach(function(pane) {
            pane.classList.remove('active', 'show');
        });
        
        // Add active class to the selected tab
        tabButton.classList.add('active');
        tabPane.classList.add('active', 'show');
    }
    
    // Add event listeners to sidebar icons for tab switching
    document.querySelectorAll('.icon-wrapper').forEach(function(icon) {
        icon.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabButton = document.querySelector(`[data-bs-target="#${tabId}"]`);
            const tabPane = document.querySelector(`#${tabId}`);
            
            if (tabButton && tabPane) {
                // Remove active class from all tabs
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.classList.remove('active');
                });
                document.querySelectorAll('.tab-pane').forEach(function(pane) {
                    pane.classList.remove('active', 'show');
                });
                
                // Add active class to the selected tab
                tabButton.classList.add('active');
                tabPane.classList.add('active', 'show');
            }
        });
    });
});