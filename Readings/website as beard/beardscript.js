const switchButton = document.getElementById("Btn");
const imageElement = document.getElementById("img1");
const paragraphElement = document.getElementById("fhalf"); // Added this line

let isImage1 = true;

switchButton.addEventListener("click", function () {
  if (isImage1) {
    imageElement.src = "beard-shave.gif"; // Replace with the path of the second image
    paragraphElement.textContent = `However, a moment eventually arrives when we become aware, perhaps before an important event, prompting us to change our visual presence. Much like trimming a beard for a neater appearance, we engage in curating our web content, shedding unnecessary projects to streamline the volume. This curation involves a thoughtful selection process, akin to choosing which facial hair to keep and which to trim. We often maintain our site's foundational design while occasionally feeling the urge to explore new ways to present ourselves, digitally or physically, allowing for experimentation without losing our inherent identity.`;
  } else {
    imageElement.src = "hair-hairy.gif"; // Original image path
    paragraphElement.textContent = `The process of maintaining our websites is similar to growing facial hair. It's more like how one sometimes overlooks the length of one's beard; we unknowingly keep adding project after project to our site, not realizing the clutter it creates and the challenge it poses for users trying to navigate through it all.`;
  }

  isImage1 = !isImage1;
});
