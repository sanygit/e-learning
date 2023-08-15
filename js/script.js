$('#slider-first.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false, 
    smartSpeed: 1300,
    navText:["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#slider-two.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true, 
    smartSpeed: 2000,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});





