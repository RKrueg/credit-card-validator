//Business Logic

function numberLength(number) {
let numLength = number.length;
if (numLength <=15 || numLength >= 17) {
  return false;
} else {
  return true;
}
}

let input1 = document.getElementById()
numberArray = parseInt(document.querySelector("input1").value);
  //User Interface Logic

// window.addEventListener("load", function() {
//   const form = this.document.getElementById("creditCard");
//   form.addEventListener("submit", handleValidation);
// });

// function handleValidation(event) {
//   event.preventDefault();
//}

console.log(numberLength("123143121321132123212131"))