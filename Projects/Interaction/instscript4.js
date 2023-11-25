$(document).ready(function () {
  const wordsColors = {
    apple: "#9b0000",
    banana: "#ffbb00",
    orange: "#ff8000",
    grapes: "#7028bd",
    peach: "#e69f65",
    mango: "#eeb13e",
    kiwi: "darkgreen",
    strawberry: "red",
  };
  let animationDuration = 3000; // Initial animation duration for rectangles
  let intervalDuration = 5000; // Initial interval duration for rectangles
  let rectInterval;
  let score = 0;

  let rectPositions = {};

  function createRectangle() {
    console.log("Creating a rectangle..."); //check rectangles

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
          const containerOffset = $container.offset().top;

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
    rect.data("isAnimating", true);
  }

  rectInterval = setInterval(createRectangle, intervalDuration);

  // Function to decrease animation duration
  setInterval(function () {
    animationDuration -= 100; // Decrease animation duration by
    console.log(
      `Rectangle fall speed increased to ${animationDuration} milliseconds`
    );
  }, 5000);

  // Function to decrease creation interval
  setInterval(function () {
    intervalDuration -= 100; // Decrease creation interval by
    console.log(
      `Next rectangle creation time reduced to ${intervalDuration} milliseconds`
    );
    clearInterval(rectInterval); // Clear the current interval
    rectInterval = setInterval(createRectangle, intervalDuration); // Set new interval
  }, 5000);

  $("#typedContent").on("input", function () {
    const typedText = $(this).val().trim().toLowerCase();

    $(".rect").each(function () {
      const wordInRect = $(this).data("word").toLowerCase();
      const isAnimating = $(this).data("isAnimating");

      if (typedText === wordInRect && isAnimating) {
        const $currentRect = $(this);

        if ($currentRect.is(":animated")) {
          $currentRect.remove();
          $currentRect.stop();
          $("#typedContent").val("");
          score++;
          $("#score").text(`Score: ${score}`);

          rearrangeRectangles();

          if (Object.values(rectPositions)[0] <= $(".line").position().top) {
            $(".game-over").show().text("Game Over");
            clearInterval(rectInterval);
          }
        }
      }
    });
  });

  $("#typedContent").keydown(function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      $(this).val("");
    }
  });

  function rearrangeRectangles() {
    $(".rect").each(function () {
      const $rect = $(this);
      const initialTop = rectPositions[$rect.data("word")];
      $rect.css("top", initialTop);
    });
  }

  function storeInitialPositions() {
    $(".rect").each(function () {
      const $rect = $(this);
      rectPositions[$rect.data("word")] = $rect.position().top;
    });
  }

  storeInitialPositions();
});
