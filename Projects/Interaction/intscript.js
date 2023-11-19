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

  let intervalDuration = 5000;
  let rectInterval;
  let score = 0;
  let animationDuration = 10000;

  function createRectangle() {
    const height = Math.floor(Math.random() * 60) + 20;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const rect = $('<div class="rect"></div>')
      .css({
        width: $("#container").width(),
        height: height + "px",
        top: "0",
      })
      .text(randomWord);

    const $container = $("#container");
    const existingRects = $container.find(".rect");
    let stackHeight = existingRects
      .toArray()
      .reduce((acc, el) => acc + $(el).outerHeight(), 0);

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
          }
        },
        complete: function () {
          $(this).data("isAnimating", false);
        },
      }
    );

    rect.data("word", randomWord).data("isAnimating", true);

    setInterval(() => {
      animationDuration -= 100;
      animation.duration = animationDuration;
    }, 10000);
  }

  rectInterval = setInterval(createRectangle, intervalDuration);

  $("#typedContent").on("input", function () {
    const typedText = $(this).val().trim().toLowerCase();

    $(".rect").each(function () {
      const wordInRect = $(this).data("word").toLowerCase();
      const isAnimating = $(this).data("isAnimating");

      if (typedText === wordInRect && isAnimating) {
        $(this).remove();
        $("#typedContent").val("");
        score++;
        $("#score").text(`Score: ${score}`);
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
