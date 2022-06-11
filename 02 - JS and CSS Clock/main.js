const secondHand = document.querySelector(".second-hand"),
  minHand = document.querySelector(".min-hand"),
  hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds(),
    secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes(),
    minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours(),
    hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();