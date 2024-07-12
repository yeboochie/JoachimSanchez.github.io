  /* Navigation Transition Function*/
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Check if the link is internal
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();

            // Remove the leading '#' to get the target element's ID
            const elementId = targetId.substring(1);

            // Scroll to the target element
            document.getElementById(elementId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* Carousel Auto Slide*/
  document.getElementById('more-about-me').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  /* Carousel Auto Slide*/
  $(document).ready(function() {
    $('#hero-carousel').carousel({
      interval: 1000 // Change this value to adjust the interval in milliseconds (2 seconds in this example)
    });
  });



