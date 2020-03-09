let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDislay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        const clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDislay.textContent = "Correct";
            changeColors(clickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDislay.textContent = "Try Again";
        }
    });
}
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}