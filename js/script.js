
document.addEventListener("DOMContentLoaded", () => {
    const collapsibleLinks = document.querySelectorAll('.collapsible');

    collapsibleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('href').substring(1);  // Get target section id
            const list = document.getElementById(targetId).querySelector('.collapsible-list');
            
            // Toggle the visibility of the collapsible list
            list.style.display = list.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// Add this JavaScript to toggle the dropdown on mobile
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(e) {
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('active'); // Toggle the 'active' class
        e.stopPropagation(); // Prevents the click from propagating to the body
    });
});



const loadingScreen = document.getElementById('loadingScreen');

        // Simulate page navigation with a delay
        function simulatePageChange() {
            showLoadingScreen();

            // Simulate a delay (e.g., for loading new content)
            setTimeout(() => {
                hideLoadingScreen();
                alert("Navigation complete!"); // Replace with actual page change logic
            }, 2000); // 2-second delay
        }

        // Show the loading screen
        function showLoadingScreen() {
            loadingScreen.classList.remove('hidden');
        }

        // Hide the loading screen
        function hideLoadingScreen() {
            loadingScreen.classList.add('hidden');
        }

        // Automatically hide the loading screen after the page loads
        window.addEventListener('load', () => {
            hideLoadingScreen();
        });
 



document.addEventListener('DOMContentLoaded', () => {
    const collapsibleButtons = document.querySelectorAll('.collapsible-button');

    collapsibleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            // Toggle the content visibility
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// Log a message when the page loads
window.onload = function () {
    console.log('The Market has loaded.');
    setupPriceToggle();
    setupDropdownToggle();
};

// Function to toggle price conversion
function setupPriceToggle() {
    const toggle = document.getElementById('priceToggle');
    if (!toggle) return;

    toggle.addEventListener('change', (event) => {
        const isConverted = event.target.checked;
        const prices = document.querySelectorAll('.price-section .price');

        prices.forEach(price => {
            const baseValueAttr = price.getAttribute('data-base-value');
            if (baseValueAttr) {
                const baseValue = parseFloat(baseValueAttr);
                if (isConverted) {
                    price.textContent = convertPrice(baseValue);
                } else {
                    price.textContent = baseValue.toFixed(2);
                }
            } else {
                console.error('Missing data-base-value attribute on price element:', price);
            }
        });
    });
}

// Example conversion function (e.g., multiply by 1.2 for a different value system)
function convertPrice(value) {
    const conversionRate = 1.2; // Adjust this rate as needed
    return (value * conversionRate).toFixed(2);
}

// Function to set up dropdown toggle
function setupDropdownToggle() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (!dropdownToggle || !dropdownMenu) return;

    // Add click event to toggle the dropdown
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        dropdownMenu.classList.toggle('active'); // Toggle the 'active' class
    });
}

function searchItems() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const items = document.querySelectorAll('.item'); // All items on the page

    items.forEach(item => {
        const description = item.querySelector('.item-description').textContent.toLowerCase();

        // If the description contains the search term, show the item, else hide it
        if (description.includes(searchInput)) {
            item.style.display = 'flex'; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}

// Get the image and overlay elements
const image = document.getElementById('image');
const overlay = document.getElementById('overlay');

// When the image is clicked, show the overlay
image.addEventListener('click', () => {
    overlay.style.display = 'flex'; // Show the overlay
});

// When the overlay is clicked, hide the overlay
overlay.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide the overlay
});

// Prevent the overlay content from closing when clicked (optional)
document.querySelector('.overlay-content').addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the overlay from closing when clicking inside the content
});