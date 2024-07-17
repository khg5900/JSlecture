function calculate(cal, num1, num2) {
  switch (cal) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return `존재하지않는 계산입니다.`;
  }
}

console.log(calculate("*", 10, 20));
