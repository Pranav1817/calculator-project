import "./styles.css";

// document.getElementById("app").innerHTML = ``;

var btn = document.getElementsByTagName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var value = this.getAttribute("value");

    if (
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "%"
    ) {
      operator = value;
      operand1 = parseFloat(display.innerText);
      display.innerText = "";
      console.log(operand1);
      operand2 = "";
    } else if (value == "=") {
      operand2 = parseFloat(display.innerText);
      var result = eval(operand1 + " " + operator + " " + operand2);
      if (result == NaN) {
        display.innerText = "Error";
        operand1 = "";
      } else {
        display.innerText = result;
        operand1 = result;
      }
    } else if (value == "ac") {
      display.innerText = "";
    } else {
      display.innerText += value;
    }
  });
}
