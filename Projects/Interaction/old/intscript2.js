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

  const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

  let score = 0;
  let createdRectangles = 0;

  const engine = Engine.create();
  const container = document.getElementById("container");
  const containerRect = container.getBoundingClientRect(); // Get container dimensions
  const render = Render.create({
    element: container,
    engine: engine,
    options: {
      width: containerRect.width,
      height: containerRect.height,
      wireframes: false,
      background: "transparent",
    },
  });

  const ground = Bodies.rectangle(
    containerRect.width / 2,
    containerRect.height - 70,
    containerRect.width,
    20,
    {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        visible: false,
      },
    }
  );

  const leftWall = Bodies.rectangle(
    0,
    containerRect.height / 2,
    20,
    containerRect.height,
    {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        visible: false,
      },
    }
  );

  const rightWall = Bodies.rectangle(
    containerRect.width,
    containerRect.height / 2,
    20,
    containerRect.height,
    {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        visible: false,
      },
    }
  );

  Engine.run(engine);
  Render.run(render);
  World.add(engine.world, [ground, leftWall, rightWall]);

  function createRectangle() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const rectWidth = Math.floor(Math.random() * 150) + 100;
    const rectHeight = Math.floor(Math.random() * 100) + 50;
    const rectX = Math.random() * (containerRect.width - rectWidth);
    const rectY = -(containerRect.height / 2);

    const rect = Bodies.rectangle(rectX, rectY, rectWidth, rectHeight, {
      label: randomWord,
      friction: 0.1,
      restitution: 0.6,
    });

    const rectElement = $("<div class='rect'></div>").text(randomWord);
    rectElement.css({
      width: rectWidth + "px",
      height: rectHeight + "px",
      position: "absolute",
      top: containerRect.height / 2 - rectHeight / 2 + "px",
      left: rectX + "px",
      textAlign: "center",
      lineHeight: rectHeight + "px",
      color: "#fff",
      backgroundColor: "#000",
    });

    // Append the rectangle element to the container
    $("#container").append(rectElement);

    createdRectangles++;

    World.add(engine.world, rect);
  }

  setInterval(createRectangle, 5000);

  $("#typedContent").on("input", function () {
    const typedText = $(this).val().trim().toLowerCase();

    $(".rect").each(function () {
      const wordInRect = $(this).text().toLowerCase();

      if (typedText === wordInRect) {
        $(this).remove();
        $("#typedContent").val("");
        score++;
        $("#score").text(`Score: ${score}`);
      }
    });
  });

  $(document).on("click", ".rect", function () {
    $(this).remove();
    $("#typedContent").val("");
    score++;
    $("#score").text(`Score: ${score}`);
  });
});
