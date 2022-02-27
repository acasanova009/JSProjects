const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const span = document.querySelector(".color");
const body = document.querySelector("body");
console.log(body);

const button = document.querySelector(".btn-hero");
console.log(button);
button.addEventListener("click", () => {
  const color = makeRandomColor();
  span.innerHTML = color;
  body.style.backgroundColor = color;
});

function makeRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}
