/**
 * Main JavaScript Entry Point
 * This file is bundled by Vite and included in the final build
 */

// Import CSS for Vite to process
import '../css/style.css';

// Log initialization message
console.log('Task 2 - Vite + Nunjucks Project initialized successfully!');

// Add any custom JavaScript functionality here
// Example: Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    // Enable smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Log page load
    console.log('Page loaded:', document.title);
});

// Export for potential use in other modules
export default {
    version: '1.0.0',
    name: 'Bootstrap Internship Task 2'
};
