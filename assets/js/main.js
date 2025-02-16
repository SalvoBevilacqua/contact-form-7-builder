gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    const smoother = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });

    owlCarouselCheck()
});

function owlCarouselCheck() {
    const owlCarouselList = document.querySelectorAll('.owl-carousel');
    if (owlCarouselList && owlCarouselList.length > 0) {
        owlCarouselList.forEach(carousel => {
            jQuery(carousel).owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: true,
                autoHeight: false,
                autoplay: false,
                autoplayTimeout: 10000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    992: {
                        items: 3
                    },
                }
            })
        });
    }
}