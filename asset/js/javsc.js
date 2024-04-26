/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})



 $(function() {
   // Owl Carousel
   var owl = $(".owl-carousel");
   owl.owlCarousel({
     items: 3,
     margin: 10,
     loop: true,
     nav: true,
     dots: false,
     mouseDrag: true,
     responsiveClass: true,
     responsive: {
      0:{
         items:1
     },
     600:{
         items:3
     },
     1000:{
         items:3
     }
      }
   });
 });
 