
const img = document.querySelector(".responsive-img");
const winText = document.getElementById("winText");
function checkResponsiveWin() {
  if (img.clientWidth <= 200) {
    winText.classList.add("show-win");
  } else {
    winText.classList.remove("show-win");
  }
}
window.addEventListener("load", checkResponsiveWin);
window.addEventListener("resize", checkResponsiveWin);
