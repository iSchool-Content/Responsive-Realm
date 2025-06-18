const grid = document.querySelector(".grid-container");
const winText = document.getElementById("winText");

function checkResponsiveWin() {
  const style = window.getComputedStyle(grid);
  const columns = style.gridTemplateColumns.split(" ").length;

  if (columns === 1) {
    winText.classList.add("show-win");
  } else {
    winText.classList.remove("show-win");
  }
}

window.addEventListener("load", checkResponsiveWin);
window.addEventListener("resize", checkResponsiveWin);
