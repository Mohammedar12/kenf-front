// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel();
// });

$('.exclusive-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:10,
    autoplay: true,
    autoplaySpeed: 1000,
    nav:false,
    responsive:{
        0:{
            items:2,
    
        },
        600:{
            items:2,
            
        },
        700:{
            items:3,
            
        },
        1000:{
            items:3,
            
        }
    }
})

$('.suggested-products').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplaySpeed: 1000,
    nav:true,
    responsive:{
        0:{
            items:2,
    
        },
        600:{
            items:2,
            
        },
        700:{
            items:3,
            
        },
        1000:{
            items:4,
            
        }
    }
})

