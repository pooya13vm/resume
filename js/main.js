let goIndexL = document.getElementById("go-indexL");
let goIndexR = document.querySelector("#go-indexR");
let overlay = document.querySelector(".overlay");
let mbaOverlay = document.getElementById("MBA");
let typeOverlay = document.getElementById("TypeScript");
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

let showOverlay = (param) => {
  if (param === 1) {
    mbaOverlay.classList.remove("hidden");
    mbaOverlay.classList.add("show");
  } else if (param === 2) {
    typeOverlay.classList.remove("hidden");
    typeOverlay.classList.add("show");
  }
};
let hideOverlay = (param) => {
  if (param === 1) {
    mbaOverlay.classList.remove("show");
    mbaOverlay.classList.add("hidden");
  } else if (param === 2) {
    typeOverlay.classList.remove("show");
    typeOverlay.classList.add("hidden");
  }
};
