'use strict';
var Previous = document.querySelector('.Previous');
var Next = document.querySelector(".Next");
var DotContainer = document.querySelector(".DotContainer");
var ImageContainer = document.querySelector(".ImageContainer");
var PreviewContainer = document.querySelector(".PreviewContainer");
var i = 0;
// Url's
var Images = [
    "./img/bild1.jpg",
    "./img/bild2.jpg",
    "./img/bild3.jpg"
];
var _loop_1 = function (index) {
    //Create as many Dots as there are Images and Append them in Dot Container
    var dot = document.createElement("div");
    dot.classList.add("dot");
    DotContainer.appendChild(dot);
    //Create as many previews as there are Images and Append them in PreviewContainer
    var Preview = document.createElement("div");
    Preview.classList.add("Preview");
    Preview.style.backgroundImage = "url(\"".concat(Images[index], "\")");
    PreviewContainer.appendChild(Preview);
    // Switch Images via Preview Images
    Preview.addEventListener("click", function () {
        document.querySelectorAll('.dot')[i].style.backgroundColor = "rgb(155, 155, 155)";
        i = index;
        ImageContainer.style.backgroundImage = "url(".concat(Images[i], ")");
        document.querySelectorAll('.dot')[i].style.backgroundColor = "black";
    });
    // Switch via the Dots
    dot.addEventListener("click", function () {
        document.querySelectorAll('.dot')[i].style.backgroundColor = "rgb(155, 155, 155)";
        i = index;
        ImageContainer.style.backgroundImage = "url(".concat(Images[i], ")");
        document.querySelectorAll('.dot')[i].style.backgroundColor = "black"; /*4. set Current Dot as Black */
    });
};
for (var index = 0; index <= Images.length - 1; index++) {
    _loop_1(index);
}
Previous.onclick = function () {
    document.querySelectorAll('.dot')[i].style.backgroundColor = "rgb(155, 155, 155)"; /* 1.Set Last Dot as Grey */
    i === 0 ? i = Images.length - 1 : i--; /* 2. Decrease i  - 1 */
    ImageContainer.style.backgroundImage = "url(".concat(Images[i], ")"); /* 3.Show Previous Image, */
    document.querySelectorAll('.dot')[i].style.backgroundColor = "black"; /*4. set Current Dot as Black */
};
Next.onclick = function () {
    document.querySelectorAll('.dot')[i].style.backgroundColor = "rgb(155, 155, 155)";
    i === Images.length - 1 ? i = 0 : i++; /* 2. Increase i  + 1 */
    ImageContainer.style.backgroundImage = "url(".concat(Images[i], ")"); /* 3.Show Next Image, */
    document.querySelectorAll('.dot')[i].style.backgroundColor = "black"; /*4. set Current Dot as Black */
};
