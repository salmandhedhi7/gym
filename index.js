// (function ($) {
//     "use strict";
    
//     // Dropdown on mouse hover
//     $(document).ready(function () {
//         function toggleNavbarMethod() {
//             if ($(window).width() > 992) {
//                 $('.navbar .dropdown').on('mouseover', function () {
//                     $('.dropdown-toggle', this).trigger('click');
//                 }).on('mouseout', function () {
//                     $('.dropdown-toggle', this).trigger('click').blur();
//                 });
//             } else {
//                 $('.navbar .dropdown').off('mouseover').off('mouseout');
//             }
//         }
//         toggleNavbarMethod();
//         $(window).resize(toggleNavbarMethod);
//     });
    
    
//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });


//     // Facts counter
//     $('[data-toggle="counter-up"]').counterUp({
//         delay: 10,
//         time: 2000
//     });


//     // Testimonials carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1000,
//         items: 1,
//         dots: false,
//         loop: true,
//         nav : true,
//         navText : [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ],
//     });
    
// })(jQuery);















// Dropdown on mouse hover
document.addEventListener('DOMContentLoaded', () => {
    const toggleNavbarMethod = () => {
        if (window.innerWidth > 992) {
            const dropdowns = document.querySelectorAll('.navbar .dropdown');

            dropdowns.forEach(dropdown => {
                dropdown.addEventListener('mouseover', () => {
                    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                    dropdownToggle.click();
                });

                dropdown.addEventListener('mouseout', () => {
                    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                    dropdownToggle.click();
                    dropdownToggle.blur();
                });
            });
        } else {
            const dropdowns = document.querySelectorAll('.navbar .dropdown');

            dropdowns.forEach(dropdown => {
                dropdown.removeEventListener('mouseover', null);
                dropdown.removeEventListener('mouseout', null);
            });
        }
    };

    toggleNavbarMethod();
    window.addEventListener('resize', toggleNavbarMethod);
});

// Back to top button
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    return false;
});

// Facts counter
const counterUps = document.querySelectorAll('[data-toggle="counter-up"]');
counterUps.forEach(counterUp => {
    const delay = 10;
    const time = 2000;
    // Implement your counterUp logic here using 'delay' and 'time'
});

// Testimonials carousel
const testimonialCarousel = document.querySelector('.testimonial-carousel');
if (testimonialCarousel) {
    new OwlCarousel({
        element: testimonialCarousel,
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
}
