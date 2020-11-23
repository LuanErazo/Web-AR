const modelViewer = document.querySelector("model-viewer");

window.switchSrc = (element, name) => {
    const base = "../../assets/ShopifyModels/" + name;
    modelViewer.src = base + '.glb';
    modelViewer.poster = base + '.png';
    const slides = document.querySelectorAll(".slide");
    slides.forEach((element) => {
        element.classList.remove("selected");
    });
    element.classList.add("selected");
};

// document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
//     // Keep slider interactions from affecting the XR scene.
//     ev.preventDefault();
// });

var model = document.querySelector("#model");
var room = document.querySelector("#room");

room.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
    var xPosition = e.clientX - (model.clientWidth / 2);
    var yPosition = e.clientY - (model.clientHeight / 2);
    var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0 )";
    model.style.transform = translate3dValue;
}