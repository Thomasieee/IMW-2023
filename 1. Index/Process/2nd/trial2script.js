// carscript.js
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const duck1 = document.querySelector(".duckright");
const duck2 = document.querySelector(".duckleft");
let posX1 = 0;
let posX2 = -300;
let posX3 = window.innerWidth; // Set initial position outside the window on the left side
let posX4 = window.innerWidth + 300;

function moveElements() {
  // Increment position
  posX1 += 1;
  posX2 += 1;
  posX3 -= 1; // Move the image to the right by incrementing its position
  posX4 -= 1;

  // Set new position
  circle1.style.left = posX1 + "px";
  duck1.style.left = posX2 + "px";
  duck2.style.left = posX3 + "px";
  circle2.style.left = posX4 + "px";

  // Check if elements have moved out of the window
  if (posX1 >= window.innerWidth) {
    posX1 = -150;
  }
  if (posX2 >= window.innerWidth) {
    posX2 = -150;
  }
  if (posX3 <= -150) {
    posX3 = window.innerWidth;
  }
  if (posX4 <= -150) {
    posX4 = window.innerWidth;
  }

  // Repeat motion
  requestAnimationFrame(moveElements);
}
function shot() {
  duck1.addEventListener("click", function () {
    const currentTop = parseInt(window.getComputedStyle(duck1).top);

    duck1.style.top = 200 + "px";
  });
}
shot();
moveElements();
