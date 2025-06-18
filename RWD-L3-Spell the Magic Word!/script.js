const container = document.querySelector(".box-container");
const winText = document.getElementById("winText");

function checkResponsiveWin() {
  const style = window.getComputedStyle(container);
  if (style.flexDirection === "column") {
    winText.classList.add("show-win");
    triggerMagic();
  } else {
    winText.classList.remove("show-win");
    document.body.classList.remove("magic");
  }
}

function triggerMagic() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}

window.addEventListener("load", checkResponsiveWin);
window.addEventListener("resize", checkResponsiveWin);
