$(document).ready(function () {
  const words = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "avocado",
    "blackberries",
  ];

  const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

  const engine = Engine.create();
  const container = document.getElementById("container");
  const containerRect = container.getBoundingClientRect();
  let gravityValue = 0.05; // Initial gravity value

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
    const rectWidth = Math.floor(Math.random() * 150) + 100;
    const rectHeight = Math.floor(Math.random() * 100) + 50;
    const rectX = Math.random() * (containerRect.width / 3) + 200;
    const rectY = -(containerRect.height / 2);
    const randomWord = words[Math.floor(Math.random() * words.length)];

    const rect = Bodies.rectangle(rectX, rectY, rectWidth, rectHeight, {
      friction: 0.1,
      restitution: 0.4,
      render: {
        fillStyle: "#000", // Set the fill color of the rectangle to black
        text: "Test",
        color: "white",
        size: 15,
      },
    });

    // Create an SVG text element for each rectangle
    const textSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    textSvg.setAttribute("x", rectX + rectWidth / 2);
    textSvg.setAttribute("y", -(rectY + rectHeight / 2));
    textSvg.setAttribute("text-anchor", "middle");
    textSvg.setAttribute("dominant-baseline", "central");
    textSvg.textContent = randomWord;
    textSvg.style.fill = "#ff0000"; // Text color

    container.appendChild(textSvg);

    // Append the rectangle to the World
    World.add(engine.world, rect);
  }

  setInterval(function () {
    createRectangle();
    gravityValue += 0.01; // Increase gravity by 0.01 after each interval
    engine.world.gravity.y = gravityValue; // Update the gravity value
  }, 5000);
});
