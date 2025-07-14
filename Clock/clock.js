const secoundHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function time() {
    const now = new Date();
    const secound = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const secoundDegree = ((secound / 60) * 360) + 90;
    const minuteDegree = ((minute / 60) * 360) + 90;
    const hourDegree = ((hour / 12) * 360) + 90;
    secoundHand.style.transform = `rotate(${secoundDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    minuteHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(time, 1000);