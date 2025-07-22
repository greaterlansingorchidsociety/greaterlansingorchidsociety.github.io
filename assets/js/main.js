/*=============== IMAGE SLIDESHOW ===============*/
let slideIndex = 1;
let autoSlideTimer;

// Initialize slideshow
function initSlideshow() {
    let slides = document.getElementsByClassName("mySlides");
    console.log("Found slides:", slides.length);
    
    if (slides.length === 0) {
        console.log("No slides found!");
        return;
    }
    
    // Debug: Check if images are loading
    for (let i = 0; i < slides.length; i++) {
        let img = slides[i].querySelector('img');
        if (img) {
            console.log("Slide", i+1, "image src:", img.src);
            console.log("Image exists:", img.complete && img.naturalHeight !== 0);
        }
    }
    
    // Initialize: Hide all slides first
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
    
    // Show ONLY the first slide
    slides[0].style.display = "block";
    slides[0].classList.add("active");
    
    // Activate first dot if it exists
    let dots = document.getElementsByClassName("dot");
    if (dots.length > 0) {
        // Remove active from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        // Activate first dot
        dots[0].classList.add("active");
    }
    
    console.log("Slideshow initialized, showing slide 1");
    
    // Start auto-advance
    startAutoSlide();
}

// Main function to show slides - COMPLETELY REWRITTEN
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;
    
    // Handle index wrapping
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    let targetIndex = slideIndex - 1; // Convert to 0-based index
    
    console.log("Showing slide:", slideIndex, "DOM index:", targetIndex);
    
    // CRITICAL: Show new slide IMMEDIATELY before any other operations
    slides[targetIndex].style.display = "block";
    slides[targetIndex].classList.add("active");
    
    // Then hide all OTHER slides (not the current one)
    for (let i = 0; i < slides.length; i++) {
        if (i !== targetIndex) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active");
        }
    }
    
    // Update dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    if (dots[targetIndex]) {
        dots[targetIndex].classList.add("active");
    }
}

// Next/previous controls
function plusSlides(n) {
    console.log("Manual navigation:", n);
    clearInterval(autoSlideTimer); // Changed from clearTimeout
    slideIndex += n;
    showSlides(slideIndex);
    startAutoSlide();
}

// Dot controls
function currentSlide(n) {
    console.log("Dot clicked:", n);
    clearInterval(autoSlideTimer); // Changed from clearTimeout
    slideIndex = n;
    showSlides(slideIndex);
    startAutoSlide();
}

// Auto-advance function
function nextSlide() {
    console.log("Auto advance from slide:", slideIndex);
    slideIndex++;
    showSlides(slideIndex);
}

// Start auto-advance timer
function startAutoSlide() {
    // Clear any existing timer
    clearInterval(autoSlideTimer);
    
    console.log("Starting auto-advance timer");
    autoSlideTimer = setInterval(() => {
        nextSlide();
    }, 4000);
}

// Stop auto-advance
function stopAutoSlide() {
    clearInterval(autoSlideTimer);
    console.log("Auto-advance stopped");
}

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId);

   if (toggle && nav) {
       toggle.addEventListener('click', () => {
           nav.classList.toggle('show-menu');
           toggle.classList.toggle('show-icon');
       });
   }
};

showMenu('nav-toggle', 'nav-menu');

/*=============== YEAR HEADER TOGGLE ===============*/
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded, initializing slideshow...");
    
    // Small delay to ensure all images are in DOM
    setTimeout(() => {
        initSlideshow();
    }, 100);
    
    // Year headers functionality
    const yearHeaders = document.querySelectorAll('.year-header');
    yearHeaders.forEach(header => {
        header.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content && content.classList.contains('year-content')) {
                content.classList.toggle('active-content');
                const indicator = this.querySelector('.year-indicator');
                if (indicator) {
                    indicator.textContent = content.classList.contains('active-content') ? '-' : '+';
                }
            }
        });
    });
});