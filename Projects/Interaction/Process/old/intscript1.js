$(document).ready(function () {
  const wordsColors = {
    apple: "lightcoral",
    banana: "yellow",
    orange: "orange",
    grapes: "lavender",
    peach: "peachpuff",
    mango: "darkgoldenrod",
    watermelon: "linear-gradient(to right, red 50%, green 50%)",
    pineapple: "linear-gradient(to right, yellow 50%, green 50%)",
    kiwi: "linear-gradient(to right, brown 50%, green 50%)",
    strawberry: "red",
  };
  let intervalDuration = 5000; // Initial interval duration
  let rectInterval; // interval reference
  let currentRect;
  let score = 0;
  let animationDuration = 10000; // Initial animation duration
  let createdRectangles = 0; // Counter for created rectangles

  function createRectangle() {
    console.log("Creating a rectangle...");
    if (createdRectangles >= 14) {
      clearInterval(rectInterval);
      $(".game-over").show().text("Game Over");
      console.log("Game Over: Maximum rectangles reached.");
      return;
    }

    const height = Math.floor(Math.random() * 60) + 20;
    const randomWord =
      Object.keys(wordsColors)[
        Math.floor(Math.random() * Object.keys(wordsColors).length)
      ];

    const rect = $('<div class="rect"></div>').css({
      width: $("#container").width(),
      height: height + "px",
      top: "0",
      backgroundColor: wordsColors[randomWord],
    });

    rect.text(randomWord);

    const $container = $("#container");
    const existingRects = $container.find(".rect");
    let stackHeight = 0;

    existingRects.each(function () {
      stackHeight += $(this).outerHeight();
      console.log("Stack Height:", stackHeight);
    });

    rect.css("bottom", stackHeight + "px");
    $container.append(rect);

    const rectTop = $container.height() - stackHeight - rect.outerHeight();
    const animation = rect.animate(
      { top: rectTop },
      {
        duration: animationDuration,
        easing: "linear",
        step: function () {
          const rectOffset = rect.offset().top;
          const containerOffset = $container.offset().top * 0.8;

          if (rectOffset <= containerOffset) {
            animation.stop();
            $(".game-over").show();
            clearInterval(rectInterval);
            console.log(
              "Game Over: Animation stopped due to element reaching container limit."
            );
          }
        },
        complete: function () {
          $(this).data("isAnimating", false);
          console.log("Animation complete.");
        },
      }
    );
    rect.data("word", randomWord);
    currentRect = rect;
    rect.data("isAnimating", true);

    createdRectangles++;
  }

  rectInterval = setInterval(createRectangle, intervalDuration);

  $("#typedContent").on("input", function () {
    const typedText = $(this).val().trim().toLowerCase();

    $(".rect").each(function () {
      const wordInRect = $(this).data("word").toLowerCase();
      const isAnimating = $(this).data("isAnimating");

      if (typedText === wordInRect && isAnimating) {
        $(this).remove();
        $(this).stop();
        $("#typedContent").val("");
        score++;
        $("#score").text(`Score: ${score}`);

        $(".rect").each(function (index) {
          const $rect = $(this);
          const topPosition = index * $rect.outerHeight();

          $rect.css("top", topPosition + "px");
        });
      }
    });
  });

  $("#typedContent").keydown(function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      $(this).val("");
    }
  });
});
