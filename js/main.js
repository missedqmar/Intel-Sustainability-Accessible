/**
 * Main JavaScript functionality for Intel Sustainability timeline
 * Handles dark mode toggle and RTL support
 */

document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  const icon = darkModeToggle.querySelector('i');
  
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
    } else {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
    }
  });
  
  // Handle RTL when language changes (for Google Translate compatibility)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'lang') {
        const htmlElement = document.documentElement;
        const lang = htmlElement.getAttribute('lang');
        
        // RTL languages list
        const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'dv', 'ku'];
        
        // Check if the language is RTL
        if (rtlLanguages.some(rtlLang => lang && lang.startsWith(rtlLang))) {
          htmlElement.setAttribute('dir', 'rtl');
          document.body.classList.add('rtl-layout');
        } else {
          htmlElement.setAttribute('dir', 'ltr');
          document.body.classList.remove('rtl-layout');
        }
      }
    });
  });
  
  // Start observing the html element for language changes
  observer.observe(document.documentElement, { attributes: true });
});
