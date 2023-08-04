// togle icon nav bar 
let menuIcon = document.querySelector('.bx');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/* Scroll Section Active Link */
let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('headernav a[href*=' +id + ']').classList.add('active');
            });
        };
    });
    // Stycky Nav bar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100); 
    navbar.onclick = () => {
        menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    };
};

// Scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duretion: 20000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'right' });
ScrollReveal().reveal('.about-img', { origin: 'left' });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Data Analysist'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});