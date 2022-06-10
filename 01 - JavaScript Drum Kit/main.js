function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // Stop the function from running all together

  key.classList.add("playing");
  audio.currentTime = 0; // Rewind to the start
  audio.play();
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip it if it's not a transform
  this.classList.remove("playing");
  // e.target.classList.remove("playing");
}

// const keys = Array.from(document.querySelectorAll(".key"));
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);