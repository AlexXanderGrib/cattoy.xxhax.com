import "./style.css";

const element = document.querySelector(".circle") as HTMLDivElement;

let latestTs = Date.now();

document.addEventListener("mousemove", (event) => {
  element.style.top = event.clientY + "px";
  element.style.left = event.clientX + "px";

  latestTs = Date.now();
});

const interval = 3000;
const amortized = Math.floor(interval * 0.8);

setInterval(() => {
  if (Date.now() - latestTs < 5000) {
    element.style.transition ='';
    return;
  }

  element.style.transition = `all ${interval}ms ease`;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  element.style.top = y + "px";
  element.style.left = x + "px";
}, amortized);
