function myFunction() {
  let x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let init = false;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      let swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.enabled = false;
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
