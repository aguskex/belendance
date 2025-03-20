const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

$(document).ready(function () {
    // Inicializar el carrusel de imágenes
    $('.carousel-imagenes').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Inicializar el carrusel de videos
    $('.carousel-videos').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false, // Desactivar autoplay del carrusel
    });

    // Pausar el video anterior y reproducir el nuevo al cambiar de slide
    $('.carousel-videos').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // Pausar el video actual
        var currentVideo = $(slick.$slides[currentSlide]).find('video').get(0);
        if (currentVideo) {
            currentVideo.pause();
        }
    });

    $('.carousel-videos').on('afterChange', function (event, slick, currentSlide) {
        // Reproducir el video del slide actual
        var currentVideo = $(slick.$slides[currentSlide]).find('video').get(0);
        if (currentVideo) {
            currentVideo.play();
        }
    });

    // Avanzar al siguiente slide cuando el video termine
    $('.carousel-videos video').on('ended', function () {
        $('.carousel-videos').slick('slickNext'); // Cambiar al siguiente slide
    });
});