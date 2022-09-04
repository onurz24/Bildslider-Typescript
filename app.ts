'use strict'

const Previous = document.querySelector('.Previous') as HTMLElement;
const Next = document.querySelector(".Next") as HTMLElement;
const DotContainer = document.querySelector(".DotContainer") as HTMLElement;
const ImageContainer = document.querySelector(".ImageContainer") as HTMLElement;
const PreviewContainer = document.querySelector(".PreviewContainer") as HTMLElement;

let i: number = 0;

// Url's
const Images: string[] = [
    "./img/bild1.jpg",
    "./img/bild2.jpg",
    "./img/bild3.jpg"
];

for (let index = 0; index <= Images.length - 1; index++) {

    //Create as many Dots as there are Images and Append them in Dot Container
    let dot = document.createElement("div");
    dot.classList.add("dot");
    DotContainer.appendChild(dot);


    //Create as many previews as there are Images and Append them in PreviewContainer
    let Preview = document.createElement("div");
    Preview.classList.add("Preview");
    Preview.style.backgroundImage = `url("${Images[index]}")`;
    PreviewContainer.appendChild(Preview);


    // Switch Images via Preview Images
    Preview.addEventListener("click", () => {
        (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "rgb(155, 155, 155)";
        i = index;
        ImageContainer.style.backgroundImage = `url(${Images[i]})`;
        (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "black";
    })


    // Switch via the Dots
    dot.addEventListener("click", () => {
        (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "rgb(155, 155, 155)";
        i = index;
        ImageContainer.style.backgroundImage = `url(${Images[i]})`;
        (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "black"; /*4. set Current Dot as Black */
    })
}

Previous.onclick = () => {
    (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "rgb(155, 155, 155)"; /* 1.Set Last Dot as Grey */
    i === 0 ? i = Images.length - 1 : i--; /* 2. Decrease i  - 1 */
    ImageContainer.style.backgroundImage = `url(${Images[i]})`; /* 3.Show Previous Image, */
    (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "black"; /*4. set Current Dot as Black */
}

Next.onclick = () => { 
    (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "rgb(155, 155, 155)";  /* 1.Set Last Dot as Grey */
    i === Images.length - 1 ? i = 0 : i++;  /* 2. Increase i  + 1 */
    ImageContainer.style.backgroundImage = `url(${Images[i]})`; /* 3.Show Next Image, */
    (document.querySelectorAll('.dot')[i] as HTMLElement).style.backgroundColor = "black"; /*4. set Current Dot as Black */
}