const heartIcon = document.querySelector(".heart-icon");
const buttons = document.querySelectorAll(".btn");

buttons[1].addEventListener("click", () => {
  heartIcon.classList.toggle("heart-icon--active");
  heartIcon.classList.add("spin-animation");
  setTimeout(() => {
    heartIcon.classList.remove("spin-animation");
  }, 800);
});
