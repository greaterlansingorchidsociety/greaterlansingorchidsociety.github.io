/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId);

   if (toggle && nav) {
       toggle.addEventListener('click', () => {
           // Add show-menu class to nav menu
           nav.classList.toggle('show-menu');

           // Add show-icon to show and hide the menu icon
           toggle.classList.toggle('show-icon');
       });
   }
};

showMenu('nav-toggle', 'nav-menu');

/*=============== YEAR HEADER TOGGLE ===============*/
document.addEventListener('DOMContentLoaded', function () {
    // Select all year headers
    const yearHeaders = document.querySelectorAll('.year-header');

    yearHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle the active class on the header
            this.classList.toggle('active');

            // Find the next sibling element (year-content)
            const content = this.nextElementSibling;

            if (content && content.classList.contains('year-content')) {
                // Toggle the active-content class to show/hide the content
                content.classList.toggle('active-content');

                // Update the indicator text
                const indicator = this.querySelector('.year-indicator');
                if (indicator) {
                    indicator.textContent = content.classList.contains('active-content') ? '-' : '+';
                }
            }
        });
    });
});