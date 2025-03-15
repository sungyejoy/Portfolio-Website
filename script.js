// const carousel = document.querySelector(".card-list");

// let isDragging = false;

// const dragStart = () => {
//     isDragging = true;
//     carousel.classList.add("dragging");
// }

// const dragging = (e) => {
//     carousel.scrollLeft = e.pageX;
//     console.log(e.pageX);
// }

// carousel.addEventListener("mousemove", dragging);

// SwiperJS 
new Swiper('.card-wrapper', {
    loop: true,

    // Pagination Bullets
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});