/*=============== IMAGE SLIDESHOW ===============*/
let slideIndex = 1;
let autoSlideTimer;

// Initialize slideshow
function initSlideshow() {
    // Debug: Check if images are loading
    let slides = document.getElementsByClassName("mySlides");
    console.log("Found slides:", slides.length);
    
    for (let i = 0; i < slides.length; i++) {
        let img = slides[i].querySelector('img');
        if (img) {
            console.log("Slide", i+1, "image src:", img.src);
            console.log("Image exists:", img.complete && img.naturalHeight !== 0);
        }
    }
    
    // Show first slide immediately and properly
    if (slides.length > 0) {
        showSlides(slideIndex); // This will properly show the first slide
        startAutoSlide(); // Start auto-advance
    }
}

// Main function to show slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides and remove active class
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("active");
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}

// Next/previous controls - THIS FUNCTION NAME MUST MATCH YOUR HTML
function plusSlides(n) {
    // Stop auto-advance when user manually navigates
    clearTimeout(autoSlideTimer);
    slideIndex += n;
    showSlides(slideIndex);
    // Restart auto-advance after user interaction
    startAutoSlide();
}

// Thumbnail image controls - THIS FUNCTION NAME MUST MATCH YOUR HTML
function currentSlide(n) {
    // Stop auto-advance when user clicks a dot
    clearTimeout(autoSlideTimer);
    slideIndex = n;
    showSlides(slideIndex);
    // Restart auto-advance after user interaction
    startAutoSlide();
}

// Auto-advance function - simplified to avoid timing issues
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Start auto-advance timer - using setInterval for consistent timing
function startAutoSlide() {
    // Clear any existing timer first
    clearTimeout(autoSlideTimer);
    
    // Use setInterval instead of recursive setTimeout for consistent timing
    autoSlideTimer = setInterval(() => {
        nextSlide();
    }, 4000); // Change slide every 4 seconds with no gaps
}

// Stop auto-advance (useful for cleanup)
function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}

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
    // Initialize slideshow when DOM is loaded
    initSlideshow();
    
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