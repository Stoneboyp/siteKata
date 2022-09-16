const swiper = new Swiper(".  wiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
    currentClass: "swiper-pagination-current",
    dynamicBullets: true,
  },
});
// const btn = document.querySelector(".btn");
// const hidden = document.querySelector(".hidden");

// btn.addEventListener("click", btnClick);

// function btnClick() {
//   console.log(content.classList);

//   if (hidden.classList.contains("hidden")) {
//     btn.textContent = "Скрыть элемент";
//   } else {
//     btn.textContent = "Показать элемент";
//   }

//   hidden.classList.toggle("hidden");
// }
// const btn = document.querySelector(".btn");
// const content = document.querySelector(".content");

// btn.addEventListener("click", btnClick);

// function btnClick() {
//   console.log(content.classList);

//   if (content.classList.contains("hidden")) {
//     btn.textContent = "Скрыть элемент";
//   } else {
//     btn.textContent = "Показать элемент";
//   }

//   content.classList.toggle("hidden");
// }
