// const value = document.getElementById("value");
const value = document.querySelector("#value");
let contador = 0;

const buttons = document.querySelectorAll(".btn");

// console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonClasses = event.currentTarget.classList;

    if (buttonClasses.contains("reset")) {
      contador = 0;
      console.log("reset");
    } else if (buttonClasses.contains("minus")) {
      contador--;
      console.log("minus");
    } else {
      contador++;
      console.log("plus");
    }
    value.textContent = contador;
    if (contador > 0) {
      value.style.color = "green";
    }
    if (contador < 0) {
      value.style.color = "red";
    }
  });
});
