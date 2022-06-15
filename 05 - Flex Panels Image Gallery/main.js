const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  // console.log("Open Toggle");
  this.classList.toggle("open");
}

function toggleActive(e) {
  // console.log("Toggle Active");
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active")
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend",toggleActive));