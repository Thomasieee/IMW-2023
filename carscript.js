const duckR1 = document.getElementById("duckright1");
const circle1 = document.getElementById("circle1");
const duckR2 = document.getElementById("duckright2");
const fish1 = document.getElementById("fishright1");
const duckR3 = document.getElementById("duckright3");
const circle2 = document.getElementById("circle2");
const duckR4 = document.getElementById("duckright4");

const duckL1 = document.getElementById("duckleft1");
const circle3 = document.getElementById("circle3");
const duckL2 = document.getElementById("duckleft2");
const fish2 = document.getElementById("fishleft1");
const duckL3 = document.getElementById("duckleft3");
const circle4 = document.getElementById("circle4");
const duckL4 = document.getElementById("duckleft4");

const duckR5 = document.getElementById("duckright5");
const circle5 = document.getElementById("circle5");
const duckR6 = document.getElementById("duckright6");
const fish3 = document.getElementById("fishright2");
const duckR7 = document.getElementById("duckright7");
const circle6 = document.getElementById("circle6");

let posX1 = 0;
let posX2 = -290;
let posX3 = -580;
let posX4 = -870;
let posX5 = -1160;
let posX6 = -1450;
let posX7 = -1740;

let posY1 = window.innerWidth; // Set initial position outside the window on the left side
let posY2 = window.innerWidth + 290;
let posY3 = window.innerWidth + 580;
let posY4 = window.innerWidth + 870;
let posY5 = window.innerWidth + 1160;
let posY6 = window.innerWidth + 1450;
let posY7 = window.innerWidth + 1740;

let posZ1 = 0;
let posZ2 = -350;
let posZ3 = -700;
let posZ4 = -1050;
let posZ5 = -1400;
let posZ6 = -1750;

function moveElements() {
  // Increment position
  posX1 += 1;
  posX2 += 1;
  posX3 += 1;
  posX4 += 1;
  posX5 += 1;
  posX6 += 1;
  posX7 += 1;

  posY1 -= 2; // Move the image to the right by incrementing its position
  posY2 -= 2;
  posY3 -= 2;
  posY4 -= 2;
  posY5 -= 2;
  posY6 -= 2;
  posY7 -= 2;

  posZ1 += 3;
  posZ2 += 3;
  posZ3 += 3;
  posZ4 += 3;
  posZ5 += 3;
  posZ6 += 3;

  // Set new position
  duckR1.style.left = posX1 + "px";
  circle1.style.left = posX2 + "px";
  duckR2.style.left = posX3 + "px";
  fish1.style.left = posX4 + "px";
  duckR3.style.left = posX5 + "px";
  circle2.style.left = posX6 + "px";
  duckR4.style.left = posX7 + "px";

  duckL1.style.left = posY1 + "px";
  circle3.style.left = posY2 + "px";
  duckL2.style.left = posY3 + "px";
  fish2.style.left = posY4 + "px";
  duckL3.style.left = posY5 + "px";
  circle4.style.left = posY6 + "px";
  duckL4.style.left = posY7 + "px";

  duckR5.style.left = posZ1 + "px";
  circle5.style.left = posZ2 + "px";
  duckR6.style.left = posZ3 + "px";
  fish3.style.left = posZ4 + "px";
  duckR7.style.left = posZ5 + "px";
  circle6.style.left = posZ6 + "px";

  // Check if elements have moved out of the window
  if (posX1 >= window.innerWidth) {
    posX1 = -150;
  }
  if (posX2 >= window.innerWidth) {
    posX2 = -150;
  }
  if (posX3 >= window.innerWidth) {
    posX3 = -150;
  }
  if (posX4 >= window.innerWidth) {
    posX4 = -150;
  }
  if (posX5 >= window.innerWidth) {
    posX5 = -150;
  }
  if (posX6 >= window.innerWidth) {
    posX6 = -150;
  }
  if (posX7 >= window.innerWidth) {
    posX7 = -150;
  }

  if (posY1 <= -150) {
    posY1 = window.innerWidth;
  }
  if (posY2 <= -150) {
    posY2 = window.innerWidth;
  }
  if (posY3 <= -150) {
    posY3 = window.innerWidth;
  }
  if (posY4 <= -150) {
    posY4 = window.innerWidth;
  }
  if (posY5 <= -150) {
    posY5 = window.innerWidth;
  }
  if (posY6 <= -150) {
    posY6 = window.innerWidth;
  }
  if (posY7 <= -150) {
    posY7 = window.innerWidth;
  }

  if (posZ1 >= window.innerWidth) {
    posZ1 = -150;
  }
  if (posZ2 >= window.innerWidth) {
    posZ2 = -150;
  }
  if (posZ3 >= window.innerWidth) {
    posZ3 = -150;
  }
  if (posZ4 >= window.innerWidth) {
    posZ4 = -150;
  }
  if (posZ5 >= window.innerWidth) {
    posZ5 = -150;
  }
  if (posZ6 >= window.innerWidth) {
    posZ6 = -150;
  }

  // Repeat motion
  requestAnimationFrame(moveElements);
}
function shotAll() {
  const elementsToShot = [
    duckR1,
    circle1,
    duckR2,
    fish1,
    duckR3,
    circle2,
    duckR4,
    duckL1,
    circle3,
    duckL2,
    fish2,
    duckL3,
    circle4,
    duckL4,
    duckR5,
    circle5,
    duckR6,
    fish3,
    duckR7,
    circle6,
  ];
  elementsToShot.forEach((element) => {
    element.addEventListener("click", function () {
      const currentTop = parseInt(window.getComputedStyle(element).top);
      element.style.top = currentTop + 100 + "px";
    });
  });
}

shotAll();

moveElements();
