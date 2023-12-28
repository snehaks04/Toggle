let container = document.querySelector(".container");
let circle = document.querySelector("#circle");

circle.addEventListener("click", () => {
  if (circle.classList.contains('circle1')) {
    circle.classList.remove('circle1');
    container.style.backgroundColor = "white";
    circle.style.backgroundColor = "black";
  } else {
    circle.classList.add('circle1');
    container.style.backgroundColor = "black";
    circle.style.backgroundColor = "white";
  }
});