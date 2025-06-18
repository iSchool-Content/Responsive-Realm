const box = document.querySelector(".hide-box");
const winText = document.getElementById("winText");
const homerGif = document.querySelector(".homer-gif");

function checkResponsiveWin() {
  const isHidden = window.getComputedStyle(box).display === "none";

  if (isHidden) {
    winText.classList.add("show-win");
    homerGif.classList.add("show-homer");
  } else {
    winText.classList.remove("show-win");
    homerGif.classList.remove("show-homer");
  }
}

window.addEventListener("load", checkResponsiveWin);
window.addEventListener("resize", checkResponsiveWin);
