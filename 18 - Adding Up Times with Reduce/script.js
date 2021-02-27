const timeNods = Array.from(document.querySelectorAll("[data-time] "));
console.log(timeNods);

const seconds = timeNods
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    console.log(mins, secs);
    return mins * 60 + secs;
  })
  .reduce((total, Vidseconds) => total + Vidseconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);

secondsLeft = secondsLeft % 3600; // Mod % shows what is left after it is equally devided

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
