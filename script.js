// button scroll back to top
const scrollTopBtn = document.querySelector('#toTopBtn');

window.onscroll = function() { 
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    }); 
});

// smooth behavior sugli anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]'); 

anchorLinks.forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = anchor.getAttribute('href'); // Ottieni l'id della sezione destinazione
    const targetElement = document.querySelector(targetId); // Trova l'elemento con quell'id

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' 
    });
  });
});

