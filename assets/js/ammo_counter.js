// Ammo Counter Script
// Manages ammo counters for ranged weapons with modal editing

// Cookie utilities
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

// Helper function to extract number from ammo string (e.g., "40(c)" -> 40)
function extractAmmoNumber(ammoString) {
    if (!ammoString) return NaN;
    
    // Extract numbers from strings like "40(c)" or "42"
    const match = ammoString.match(/\d+/);
    return match ? parseInt(match[0]) : NaN;
}

// Current weapon being edited
// Note: weaponId format is "{character-key}-{weapon-id}-{index}" (e.g., "eleonor-ares_crusader-0")
// This ensures cookies are unique per character per weapon, preventing data mixing
let currentWeaponId = null;
let currentAmmoSpan = null;
let currentMaxAmmo = null;
let ammoModal = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ammo counter script loaded');
    
    // Initialize ammo counters
    const ammoCounters = document.querySelectorAll('.ammo-counter');
    
    if (ammoCounters.length > 0) {
        console.log('Found ' + ammoCounters.length + ' ammo counters');
    }
    
    // Initialize modal once
    const modalElement = document.getElementById('ammoModalTemplate');
    if (modalElement) {
        ammoModal = new bootstrap.Modal(modalElement);
        
        // Add event listener to ensure backdrop is removed when modal is hidden
        modalElement.addEventListener('hidden.bs.modal', function () {
            // Remove any remaining backdrop elements
            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(backdrop => {
                backdrop.remove();
            });
            
            // Remove modal-open class from body
            document.body.classList.remove('modal-open');
            
            // Reset body style
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        });
    }
    
    // Add event listeners for modal triggers and reload buttons
    ammoCounters.forEach(function(counter) {
        const weaponId = counter.getAttribute('data-weapon-id');
        console.log('Found ammo counter for weapon: ' + weaponId);
        const ammoModalTrigger = counter.querySelector('.ammo-modal-trigger');
        const ammoSpan = counter.querySelector('.current-ammo');
        const maxAmmoSpan = counter.querySelector('.max-ammo');
        
        // Check if all required elements exist
        if (!ammoSpan || !maxAmmoSpan) {
            console.error('Ammo counter elements not found for weapon: ' + weaponId);
            return;
        }
        
        // Load saved ammo count from cookie
        // Cookie format: "ammo_{character-key}-{weapon-id}-{index}" (e.g., "ammo_eleonor-ares_crusader-0")
        // This ensures each character's weapon has its own unique cookie, preventing data mixing between characters
        const savedAmmo = getCookie('ammo_' + weaponId);
        if (savedAmmo) {
            // If we have a saved numeric value, use it (replacing the initial "40(c)" format)
            ammoSpan.textContent = savedAmmo;
        } else {
            // If no saved value, extract the number from the initial value
            const initialAmmo = extractAmmoNumber(ammoSpan.textContent);
            if (!isNaN(initialAmmo)) {
                ammoSpan.textContent = initialAmmo;
            }
        }
        
        // Update low ammo warning
        updateLowAmmoWarning(ammoSpan, maxAmmoSpan);
        
        // Modal trigger for editing ammo
        if (ammoModalTrigger) {
            ammoModalTrigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Store current weapon info
                currentWeaponId = weaponId;
                currentAmmoSpan = ammoSpan; // Use the local variable from this iteration
                currentMaxAmmo = extractAmmoNumber(maxAmmoSpan.textContent);
                
                // Get current ammo value
                let currentAmmo = extractAmmoNumber(currentAmmoSpan.textContent);
                if (isNaN(currentAmmo)) currentAmmo = 0;
                
                // Update all display elements
                document.getElementById('currentAmmoDisplay').textContent = currentAmmo;
                document.getElementById('ammoCountDisplay').textContent = currentAmmo;
                document.getElementById('ammoCount').value = currentAmmo;
                document.getElementById('maxAmmoDisplay').textContent = !isNaN(currentMaxAmmo) ? currentMaxAmmo : 'N/A';
                
                // Set max attribute for input
                document.getElementById('ammoCount').max = currentMaxAmmo;
                
                // Show modal using the global instance
                if (ammoModal) {
                    ammoModal.show();
                } else {
                    console.error('Modal not initialized');
                }
            });
        }
        
        // Reload ammo
        const reloadBtn = counter.querySelector('.ammo-reload');
        if (reloadBtn) {
            reloadBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const maxAmmo = extractAmmoNumber(maxAmmoSpan.textContent);
                if (!isNaN(maxAmmo)) {
                    ammoSpan.textContent = maxAmmo;
                    // Save to cookie with unique character-weapon identifier
                    // Cookie format: "ammo_{character-key}-{weapon-id}-{index}" (e.g., "ammo_eleonor-ares_crusader-0")
                    setCookie('ammo_' + weaponId, maxAmmo, 30);
                    ammoSpan.classList.remove('text-danger');
                    
                    reloadBtn.classList.add('reloading');
                    setTimeout(() => {
                        reloadBtn.classList.remove('reloading');
                    }, 500);
                    
                    // Update low ammo warning
                    updateLowAmmoWarning(ammoSpan, maxAmmoSpan);
                }
            });
        }
    });
    
    // Set up modal buttons
    setupModalButtons();
});

function setupModalButtons() {
    // Burst buttons
    document.getElementById('shortBurstBtn').addEventListener('click', function() {
        let currentValue = parseInt(document.getElementById('ammoCount').value);
        let newValue = currentValue - 3;
        if (!isNaN(currentValue) && newValue >= 0) {
            updateModalDisplay(newValue);
        }
    });
    
    document.getElementById('longBurstBtn').addEventListener('click', function() {
        let currentValue = parseInt(document.getElementById('ammoCount').value);
        let newValue = currentValue - 6;
        if (!isNaN(currentValue) && newValue >= 0) {
            updateModalDisplay(newValue);
        }
    });
    
    document.getElementById('fullAutoBtn').addEventListener('click', function() {
        let currentValue = parseInt(document.getElementById('ammoCount').value);
        let newValue = currentValue - 10;
        if (!isNaN(currentValue) && newValue >= 0) {
            updateModalDisplay(newValue);
        }
    });
    
    // Decrement button
    document.getElementById('decrementBtn').addEventListener('click', function() {
        let currentValue = parseInt(document.getElementById('ammoCount').value);
        if (!isNaN(currentValue) && currentValue > 0) {
            currentValue--;
            updateModalDisplay(currentValue);
        }
    });
    
    // Increment button
    document.getElementById('incrementBtn').addEventListener('click', function() {
        let currentValue = parseInt(document.getElementById('ammoCount').value);
        if (!isNaN(currentValue) && !isNaN(currentMaxAmmo) && currentValue < currentMaxAmmo) {
            currentValue++;
            updateModalDisplay(currentValue);
        }
    });
    
    // Set to Max button
    document.getElementById('setToMaxBtn').addEventListener('click', function() {
        const maxAmmo = currentMaxAmmo;
        if (!isNaN(maxAmmo)) {
            updateModalDisplay(maxAmmo);
        }
    });
    
    // Manual input change
    document.getElementById('ammoCount').addEventListener('change', function() {
        const newValue = parseInt(this.value);
        if (!isNaN(newValue)) {
            updateModalDisplay(newValue);
        }
    });
    
    // Save button
    document.getElementById('saveAmmoBtn').addEventListener('click', function() {
        const ammoInput = document.getElementById('ammoCount');
        const newAmmoValue = parseInt(ammoInput.value);
        
        if (!isNaN(newAmmoValue) && !isNaN(currentMaxAmmo) && newAmmoValue >= 0 && newAmmoValue <= currentMaxAmmo) {
            // Update display
            currentAmmoSpan.textContent = newAmmoValue;
            
            // Save to cookie
            // Cookie format: "ammo_{character-key}-{weapon-id}-{index}" (e.g., "ammo_eleonor-ares_crusader-0")
            // This ensures each character's weapon has its own unique cookie, preventing data mixing between characters
            setCookie('ammo_' + currentWeaponId, newAmmoValue, 30);
            
            // Update low ammo warning
            const maxAmmoSpan = currentAmmoSpan.nextElementSibling.nextElementSibling; // Get max ammo span
            updateLowAmmoWarning(currentAmmoSpan, maxAmmoSpan);
            
            // Close modal using the global instance
            if (ammoModal) {
                ammoModal.hide();
            }
        } else {
            alert('Please enter a valid ammo value between 0 and ' + currentMaxAmmo);
        }
    });
}

function updateModalDisplay(value) {
    // Ensure value is within bounds
    if (isNaN(value)) value = 0;
    if (!isNaN(currentMaxAmmo) && value > currentMaxAmmo) value = currentMaxAmmo;
    if (value < 0) value = 0;
    
    // Update all display elements
    document.getElementById('currentAmmoDisplay').textContent = value;
    document.getElementById('ammoCountDisplay').textContent = value;
    document.getElementById('ammoCount').value = value;
}

function updateLowAmmoWarning(currentAmmoSpan, maxAmmoSpan) {
    const currentAmmo = extractAmmoNumber(currentAmmoSpan.textContent);
    const maxAmmo = extractAmmoNumber(maxAmmoSpan.textContent);
    
    if (!isNaN(currentAmmo) && !isNaN(maxAmmo)) {
        if (currentAmmo <= maxAmmo * 0.2) {
            currentAmmoSpan.classList.add('text-danger');
        } else {
            currentAmmoSpan.classList.remove('text-danger');
        }
    }
}