document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Page Navigation Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page-section');

    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.add('hidden');
        });
        
        // Show the target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            window.scrollTo(0, 0); // Scroll to top on page change
        }

        // Update active state for desktop links
        navLinks.forEach(link => {
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update active state for mobile links
        mobileNavLinks.forEach(link => {
             if (link.dataset.page === pageId) {
                link.classList.add('active', 'bg-brand-light', 'text-brand-purple');
                link.classList.remove('text-gray-600', 'hover:bg-gray-100');
            } else {
                link.classList.remove('active', 'bg-brand-light', 'text-brand-purple');
                link.classList.add('text-gray-600', 'hover:bg-gray-100');
            }
        });

        // Close mobile menu on navigation
        mobileMenu.classList.add('hidden');
    }

    // Combine all clickable navigation elements
    const allNavElements = [...navLinks, ...mobileNavLinks, ...navButtons];
    
    allNavElements.forEach(element => {
        // Check if element has a data-page attribute
        if (element.dataset.page) {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                const pageId = element.dataset.page;
                showPage(pageId);
            });
        }
    });

    // Set the initial page to 'home'
    showPage('home');
});
