let resultScreen = document.getElementById("res");
let result = 0;
let operatorsSeq = "";

function clickZero() {
  resultScreen.innerHTML += "0";
}

function clickOne() {
  resultScreen.innerHTML += "1";
}

function clickSum() {
  operatorSeq = "+";
  result = parseInt(resultScreen.innerHTML, 2);
  resultScreen.innerHTML += "+";
}

function clickSub() {
  operatorSeq = "-";
  resultScreen.innerHTML += "-";
}

function clickMul() {
  operatorSeq = "*";
  result = parseInt(resultScreen.innerHTML, 2);
  resultScreen.innerHTML += "*";
}

function clickDiv() {
  operatorSeq = "/";
  resultScreen.innerHTML += "/";
}

function clickEql() {
  let ans = 0;

  if (operatorSeq == "+") {
    let i = resultScreen.innerHTML.indexOf("+");
    let operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result + operand2;
  } else if (operatorSeq == "-") {
    let i = resultScreen.innerHTML.indexOf("-");
    let operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result - operand2;
  } else if (operatorSeq == "*") {
    let i = resultScreen.innerHTML.indexOf("*");
    let operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result * operand2;
  } else if (operatorSeq == "/") {
    let i = resultScreen.innerHTML.indexOf("/");
    let operand2 = parseInt(resultScreen.innerHTML.substr(i + 1), 2);
    ans = result / operand2;
  }

  resultScreen.innerHTML = ans.toString(2);
}

function clickClear() {
  resultScreen.innerHTML = "";
}
