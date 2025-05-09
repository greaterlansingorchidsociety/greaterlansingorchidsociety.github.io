let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Ensure slideIndex is within bounds
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    // Increment slideIndex AFTER displaying
    slideIndex++;

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;

    // Ensure slideIndex is within bounds
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("mySlides").length - 1;
    }

    showSlides();
}

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId);

   toggle.addEventListener('click', () => {
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu');

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon');
   });
};

showMenu('nav-toggle', 'nav-menu');
showSlides();

/*=============== YEAR HEADER TOGGLE ===============*/
$(document).ready(function() {
    // Add click event listener to all year headers
    $('.year-header').click(function() {
        // Toggle the active class on the clicked header
        $(this).toggleClass('active');

        // Toggle the indicator text between "+" and "-"
        const indicator = $(this).find('.year-indicator');
        if (indicator.length) {
            const currentText = indicator.text();
            indicator.text(currentText === '+' ? '-' : '+');
        }

        // Toggle the visibility of the corresponding year-content
        const content = $(this).next('.year-content');
        if (content.length) {
            content.slideToggle(300); // Smoothly show/hide the content
        }
    });

    // Initially hide all year-content sections
    $('.year-content').hide();
});