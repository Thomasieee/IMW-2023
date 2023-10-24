//  Solution 2

const interactionContainer = document.getElementById(“interactionContainer”);
const colorbtns = document.querySelectorAll(".colors")// .colors is the class and the queryselector that has the class colors will get selected
for (let step = 0; step < colorbtns.length; step++) {// .length will go upto the end of colorbtns
    colorbtns[i].addEventListener("click", function () { // [] is the array, the i can take any value
        interactionContainer.style.backgroundColor = colorbtns[step].style.backgroundColor // supposed to be this but this wont work, this would work only if the css code is within the html code
        interactionContainer.s  tyle.backgroundColor = getComputedStyle(colorbtns[step]).backgroundColor // this will allow the code to go inside the separate css file and get the data - yeah so wierd

    
    })
}

// solution 3 - is the same of solution 2 exccept you add an "of" in the for loop and use the plural and singular name of the array
// plural = colorbtns
// singular = colorbtn
for (cont colorbtn of colorbtns) {
    //same as solution 2 just change "colorbtns" to singular "colorbtn"
    
}

solution 4 - 

    colorbtns.forEach(function (colorbtn)){   //or you could also write it as
}
colorbtns.forEach((colorbtn) => {

    // same as solution 3
    
})



// jQuery

"$" replace document.whatevaaaa

