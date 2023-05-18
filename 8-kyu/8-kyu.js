function getHelloWorld() {
  return "Hello World";
}

function getStringByCondition(condition) {
  if (condition) {
    return "La condición es verdadera";
  }
  return "La condición es falsa";
}

function addKataToInput(sentence) {
  return `${sentence} kata`;
}

function basicCalculator(number1, number2, operation) {
  if (operation === "+") {
    return number1 + number2;
  }
  if (operation === "-") {
    return number1 - number2;
  }
  if (operation === "/") {
    return number1 / number2;
  }
  if (operation === "*") {
    return number1 * number2;
  }
}

module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
};
