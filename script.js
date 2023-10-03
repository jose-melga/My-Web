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
  
  
/**********VIEW MORE BUTTON**************** */



document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".column");
    const button = document.getElementById("more-button");
    const divsPerPage = 2; // show 2 divs
    let divsToShow = 0;

    function showDivs(start, end) {
        for (let i = 0; i < divs.length; i++) {
            if (i >= start && i < end) {
                divs[i].style.display = "block";
            } else {
                divs[i].style.display = "none";
            }
        }
    }

    function loadMoreDivs() {
        divsToShow += divsPerPage;
        showDivs(0, divsToShow);
        if (divsToShow >= divs.length) {
            button.style.display = "none"; // hide when no more divs
        }
    }

    button.addEventListener("click", loadMoreDivs);
    loadMoreDivs(); // add 2 at beginner
});
