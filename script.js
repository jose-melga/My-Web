// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the button is clicked, scroll to the top of the document
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    scrollToTop();
});

function scrollToTop() {
    // For smooth scrolling, use requestAnimationFrame
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8);
    }
}

/********************************************************************************************************** */

//fOOTER
// Get year
const currentYear = new Date().getFullYear();

// Add year
document.getElementById('currentYear').textContent = currentYear;
  
  
  
  
  