const numArr = [15, 35, 48, 21, 43];
console.log(numArr);
numArr[0] = ++numArr[0];
numArr[1] = numArr[1] * 2;
console.log(numArr);
console.log(numArr.length);
numArr[numArr.length - 1] = 100; // 마지막에 생성을 다른방법으로 표현하기
console.log(numArr.length);
numArr[numArr.length - 1] = numArr[numArr.length - 1] * 2;
console.log(numArr.length);
