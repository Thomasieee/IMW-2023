$(document).ready(function () {
  const words = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "strawberry",
    "pineapple",
    "watermelon",
    "kiwi",
    "mango",
    "peach",
  ];
  let intervalDuration = 5000; // Initial interval duration in milliseconds
  let rectInterval; // Variable to hold the interval reference
  let currentRect;

  function createRectangle() {
    const height = Math.floor(Math.random() * 60) + 20;
    const randomWord = words[Math.floor(Math.random() * words.length)];

    const rect = $('<div class="rect"></div>').css({
      width: $("#container").width(),
      height: height + "px",
      top: "0",
    });

    // Set the random word as text content of the rectangle
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
    rect.animate(
      { top: rectTop },
      {
        duration: 10000,
        step: function () {
          const rectOffset = rect.offset().top;
          const containerOffset = $container.offset().top * 0.8;

          if (rectOffset <= containerOffset) {
            rect.stop();
            $(".game-over").show();
            clearInterval(rectInterval);
          }
        },
      }
    );
    rect.data("word", randomWord);
    currentRect = rect;
  }

  function decreaseInterval() {
    intervalDuration -= 3000; // Decrease interval duration by 1 second
    clearInterval(rectInterval); // Clear the current interval
    rectInterval = setInterval(createRectangle, intervalDuration); // Start new interval
  }

  // Create rectangles at the initial interval duration
  rectInterval = setInterval(createRectangle, intervalDuration);

  // Decrease interval duration every 10 seconds
  setInterval(decreaseInterval, 50000);
  $("#typedContent").on("input", function () {
    const typedText = $(this).val().trim().toLowerCase();

    $(".rect").each(function () {
      const wordInRect = $(this).data("word").toLowerCase();

      if (typedText === wordInRect) {
        $(this).remove();
        $(this).stop();
        $("#typedContent").val(""); // Clear typed text upon removing the rectangle
      }
    });
  });

  $("#typedContent").keydown(function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      $(this).val(""); // Clear typed text upon pressing "Enter"
    }
  });
});
