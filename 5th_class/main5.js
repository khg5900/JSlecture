function yaho() {
  console.log(`야호`);
}

function nextNum(num1) {
  return num1 + 1;
}

function plus(num1, num2) {
  const result = num1 + num2;
  return result;
}

function minNum(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num1 > num2) {
    return num2;
  } else {
    return `두 숫자는 같습니다.`;
  }
  //   return num1 > num2 ? num2 : num1;  삼항연산자
}
