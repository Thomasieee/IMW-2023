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

  const engine = Engine.create();
  const canvasContainer = document.getElementById("canvasContainer");

  const render = Render.create({
    element: canvasContainer,
    engine: engine,
    options: {
      width: 500,
      height: 800,
      wireframes: false,
      background: "#045686",
    },
  });

  const rectWidth = 100; // Adjust width of falling rectangles
  let score = 0;

  function createRectangle() {
    const randomWord = words[Math.floor(Math.random() * words.length)];

    const rectangle = Bodies.rectangle(
      Math.random() * render.options.width,
      0,
      rectWidth,
      30, // Height of the falling rectangles
      {
        label: randomWord,
        render: {
          fillStyle: "#000",
          text: {
            content: randomWord,
            color: "#f0f0f0",
            size: 15,
          },
        },
      }
    );

    World.add(engine.world, rectangle);

    return rectangle;
  }

  // Add the falling rectangles at intervals
  setInterval(function () {
    const rectangle = createRectangle();
    Matter.Body.setVelocity(rectangle, { x: 0, y: 5 }); // Adjust falling speed here
  }, 2000); // Interval duration

  // Handle collision events
  Matter.Events.on(engine, "collisionStart", function (event) {
    const pairs = event.pairs;

    pairs.forEach(function (collision) {
      const bodyA = collision.bodyA;
      const bodyB = collision.bodyB;

      // Check if the collided bodies contain a word label
      if (bodyA.label && bodyB.label) {
        const collidedWord =
          bodyA.label === "rectangle" ? bodyB.label : bodyA.label;

        // Remove the collided rectangle
        if (words.includes(collidedWord)) {
          score++;
          $("#score").text(`Score: ${score}`);
          World.remove(
            engine.world,
            bodyA.label === "rectangle" ? bodyA : bodyB
          );
        }
      }
    });
  });

  Render.run(render);
  Engine.run(engine);

  // Rest of your code for handling typedContent, game over logic, etc.
});
