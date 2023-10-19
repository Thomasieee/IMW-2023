
// Interact - backgroundColor change
let green = document.querySelector('#green');
let plum = document.querySelector('#plum');
let blue = document.querySelector('#blue');
let container = document.querySelector('#interactionContainer');

green.addEventListener("click", function () {
     container.style.backgroundColor = "lightgreen";
})
 
plum.addEventListener("click", function () {
    container.style.backgroundColor = "plum";
})

blue.addEventListener("click", function () {
    container.style.backgroundColor = "lightblue";
})

// Loop my name
let name = "Thomsieee";
let containertwo = document.querySelector('#loopContainer');

for (let step = 0; step < 10; step++){
    let textBox = document.createElement("p");
    textBox.innerHTML = name;
    containertwo.appendChild(textBox);
}

// Condition to change the colour when you cross the bottom half of the box
let position = document.querySelector('#conditionContainer');
let square = document.querySelector('#square');


position.addEventListener('mousemove', mouse);

function mouse(e) {


    if (e.offsetY > 350) {
        square.style.backgroundColor = "aquamarine";
    } else {
        square.style.backgroundColor = "lightsalmon";
    }
}   

// Increase font size
let text = document.querySelector('#increaseText');
let size = 20;
function increasesize() {

    if (size < 100) {
        size++;
        text.style.fontSize = size + "px";
    }
    else if (size = 100) {
       size = 20;
    }   
}
setInterval(increasesize, 1000);

//Display number of character
let typed = document.querySelector('#inputText');
let submit = document.querySelector('#submit');
let tlength = document.querySelector('#text-length')

submit.addEventListener("click", function () {
    event.preventDefault();
    const alphanum = typed.value.length;
    tlength.innerText = alphanum;
});


//Console
console.log("This was .....");



