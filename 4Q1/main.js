const arr1 = [2, 3, 4];
console.log(arr1);
const arr2 = [1, "10", true, arr1];
console.log(arr2);
console.log(typeof arr1[1]);
const plusNum = arr1[0] + +arr1[1]; // 타입변환
console.log(plusNum);

console.log(typeof arr1[0]);
arr2[2] = !arr2[2];
console.log(arr2[2]);
console.log(arr1[1] + arr1[2]);
