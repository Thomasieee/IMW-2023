const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const duck1 = document.querySelector(".duckright");
let posX1 = 0;
let posX2 = 200;

function moveCircles() {
  // Increment position
  posX1 += 1;
  posX2 += 1;

  // Set new position
  circle1.style.left = posX1 + "px";

  duck1.style.left = posX2 + "px";

  // Reset position if circles reach the end
  if (posX1 >= window.innerWidth) {
    posX1 = -50;
  }
  if (posX2 >= window.innerWidth) {
    posX2 = -50;
  }

  // Repeat motion
  requestAnimationFrame(moveCircles);
}

moveCircles();
