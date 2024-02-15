// console.log("Hellow World")

// function piyush(a, b) {
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a % b);
//     console.log(a / b);
//     return
// }

// let x = piyush(5,6);
// console.log(x)

// Calculator using JavaScript

// let inputValue = document.getElementById("inputValue");
// // console.log(inputValue);

// // let inputString = "";
// function clickToAddValue(value) {
//   inputValue.value += value;
//   // console.log(inputValue.value);
//   // inputString += inputValue.value;
//   // console.log(inputString);
// }

// function clearTheInputValue() {
//   inputValue.value = "";
// }
// function calculateTheInput() {
//   if (inputValue == "=") {
//     inputValue = eval(inputValue);
//     inputValue.value += inputValue;
//   }
// }

let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);

let string = "";

buttonsArray.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (event.target.innerHTML === "C") {
      string = "";
      display.value = string;
    } else if (event.target.innerHTML === "=") {
      string = eval(string);
      display.value = string;
    } else if (event.target.innerHTML === "x") {
      string += "*";
      display.value = string;
    }
    else {
      string += event.target.innerHTML;
      display.value = string;
    }

    // console.log(event.target.innerHTML);
  });
});

// console.log(display);
// console.log(buttonsArray);
