var number1: number;
var number2: number;
var parentElement = document.querySelectorAll(".number");

for (var i = 0; i < parentElement.length; i++) {
  var childElement = parentElement[i];
  childElement.addEventListener("click", definePos, false);
}

function result() {
  console.log('started');
  console.log(number1);
  console.log(number2);
}

function definePos(element) {
  var button = document.getElementById(element.target.id);
  var value = button.firstChild.nodeValue;
  if(!number1) {
    number1 = parseInt(value);
  } else {
    number2 = parseInt(value);
  }
}

function sum() {
  console.log(number1 + number2);
}

document.getElementById('result').addEventListener('click', result);
document.getElementById('sum').addEventListener('click', sum);
