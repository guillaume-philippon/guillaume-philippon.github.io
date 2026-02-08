// Ammo Counter Script
// Manages ammo counters for ranged weapons

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

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ammo counter script loaded');
    
    // Initialize ammo counters
    const ammoCounters = document.querySelectorAll('.ammo-counter');
    
    if (ammoCounters.length > 0) {
        console.log('Found ' + ammoCounters.length + ' ammo counters');
    }
    
    // Add event listeners for increment/decrement buttons
    ammoCounters.forEach(function(counter) {
        const weaponId = counter.getAttribute('data-weapon-id');
        console.log('Found ammo counter for weapon: ' + weaponId);
        const decrementBtn = counter.querySelector('.ammo-decrement');
        const incrementBtn = counter.querySelector('.ammo-increment');
        const currentAmmoSpan = counter.querySelector('.current-ammo');
        const maxAmmoSpan = counter.querySelector('.max-ammo');
        
        // Check if all required elements exist
        if (!currentAmmoSpan || !maxAmmoSpan) {
            console.error('Ammo counter elements not found for weapon: ' + weaponId);
            return;
        }
        
        // Load saved ammo count from cookie
        const savedAmmo = getCookie('ammo_' + weaponId);
        if (savedAmmo) {
            currentAmmoSpan.textContent = savedAmmo;
        }
        
        // Decrement ammo
        if (decrementBtn) {
            decrementBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                let currentAmmo = parseInt(currentAmmoSpan.textContent);
                const maxAmmo = parseInt(maxAmmoSpan.textContent);
                
                if (!isNaN(currentAmmo) && !isNaN(maxAmmo) && currentAmmo > 0) {
                    currentAmmo--;
                    currentAmmoSpan.textContent = currentAmmo;
                    setCookie('ammo_' + weaponId, currentAmmo, 30);
                    
                    if (currentAmmo <= maxAmmo * 0.2) {
                        currentAmmoSpan.classList.add('text-danger');
                    } else {
                        currentAmmoSpan.classList.remove('text-danger');
                    }
                }
            });
        }
        
        // Increment ammo
        if (incrementBtn) {
            incrementBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                let currentAmmo = parseInt(currentAmmoSpan.textContent);
                const maxAmmo = parseInt(maxAmmoSpan.textContent);
                
                if (!isNaN(currentAmmo) && !isNaN(maxAmmo) && currentAmmo < maxAmmo) {
                    currentAmmo++;
                    currentAmmoSpan.textContent = currentAmmo;
                    setCookie('ammo_' + weaponId, currentAmmo, 30);
                    currentAmmoSpan.classList.remove('text-danger');
                }
            });
        }
        
        // Reload ammo
        const reloadBtn = counter.querySelector('.ammo-reload');
        if (reloadBtn) {
            reloadBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const maxAmmo = parseInt(maxAmmoSpan.textContent);
                if (!isNaN(maxAmmo)) {
                    currentAmmoSpan.textContent = maxAmmo;
                    setCookie('ammo_' + weaponId, maxAmmo, 30);
                    currentAmmoSpan.classList.remove('text-danger');
                    
                    reloadBtn.classList.add('reloading');
                    setTimeout(() => {
                        reloadBtn.classList.remove('reloading');
                    }, 500);
                }
            });
        }
    });
});