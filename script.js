const btn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");
const search = document.querySelectorAll(".search-btn");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".search-item > i");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
  btn.classList.toggle("fa-xmark");
});
search.forEach(function (e) {
  e.addEventListener("click", function () {
    overlay.classList.add("active");
  });
});

close.addEventListener("click", function () {
  overlay.classList.remove("active");
});

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((item) => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}
