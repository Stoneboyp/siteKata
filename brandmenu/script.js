function myFunction() {
  let imgRotate = document.querySelector(".sidebar-brands__footer_button-img");
  const btn = document.querySelector(".sidebar-brands__footer_button");
  let x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.textContent = "Скрыть";
    imgRotate.style.transform = "rotate(0deg)";
  } else {
    x.style.display = "none";
    btn.textContent = "Показать всё";
    imgRotate.style.transform = "rotate(180deg)";
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
