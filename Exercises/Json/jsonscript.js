let plants = [
  {
    description: "Easy to take care of houseplant.",
    photo: "rubberplant.jpg",
    name: "Rubber Plant",
  },
  {
    description: "Easy to take care of houseplant.",
    photo: "rubberplant.jpg",
    name: "Rubber Plant2",
  },
  {
    description: "Easy to take care of houseplant.",
    photo: "rubberplant.jpg",
    name: "Rubber Plant2",
  },
];

console.log(plant.name);

$(function () {
  $("main").append(`<h2>${plant.name}</h2>`);
});

for (let i = 0; i > 3; i++) {
  console.log(plant[i].name);
}
