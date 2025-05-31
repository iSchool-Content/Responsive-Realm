const winText = document.getElementById("winText");
const text = document.querySelector(".responsive-text");

function checkResponsiveWin() {
    const fontSize = parseFloat(getComputedStyle(text).fontSize);
    if (fontSize <= 20) {
        winText.classList.add("show-win");
    } else {
        winText.classList.remove("show-win");
    }
}

window.addEventListener("load", checkResponsiveWin);
window.addEventListener("resize", checkResponsiveWin);
