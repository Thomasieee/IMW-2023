$(document).ready(function () {
  // add class of buttons
  for (let step = 0; step < 255; step++) {
    let blocks = $('<button class="color-button">CLICK</button>');
    blocks.width(100).height(50);
    blocks.css({
      "background-color": "#000000",
      color: "white",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.4s",
      borderRadius: "10px",
    });
    $(".button-container").append(blocks);
  }
  // random color using hex
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // changes color when a button is hovered
  const bttns = $(".color-button");
  for (const bttn of bttns) {
    $(bttn).hover(function () {
      $(this).css("background-color", getRandomColor());
    });
  }

  // Changes the background color of the page when a button is clicked
  for (const bttn of bttns) {
    $(bttn).click(function () {
      let currentColor = $(this).css("background-color");
      $("body").css("background-color", currentColor);
    });
  }
  // Changes visibility when double clicked
  for (const bttn of bttns) {
    $(bttn).dblclick(function () {
      $(this).animate(
        {
          opacity: "0",
        },
        1000
      );
    });
  }
});
