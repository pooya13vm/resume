let goIndexL = document.getElementById("go-indexL");
let goIndexR = document.querySelector("#go-indexR");
let overlay = document.querySelector(".overlay");
let hoverEnterR = (index) => {
  goIndexR.style.top = 110 * index + "px";
};
let hoverEnterL = (index) => {
  if (overlay.classList.contains("hidden")) {
    goIndexL.style.top = 110 * index + "px";
    let allScreen = document.getElementsByClassName("screen");
    for (i = 0; i < allScreen.length; i++) {
      allScreen[i].classList.remove("visible");
    }
    let nowVisible = document.getElementById("screen-" + index);
    nowVisible.classList.add("visible");
  }
};

let showOverlay = () => {
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
};
let hideOverlay = () => {
  overlay.classList.remove("show");
  overlay.classList.add("hidden");
};
