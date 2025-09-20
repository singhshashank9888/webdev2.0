const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const img_src = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
const img_alt = ["Human Eye", "Clouds ", "FLower", "Egyptians", "Butterfly"];

/* Looping through images */

for (let i = 0; i < 5; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', img_src[i]);
    newImage.setAttribute('alt', img_alt[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (event) => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;


    });
}

// thumbBar.addEventListener("click",(e)=>{
//     displayedImage.src=e.target.src;
//     displayedImage.alt=e.target.alt;
// })


/* Wiring up the Darken/Lighten button */


btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else {
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
