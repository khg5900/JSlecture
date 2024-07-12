for (let i = 0; i < 3; i++) {
  console.log(i);
}

const timesTable = 2;
for (let i = 1; i <= timesTable; i++) {
  for (let j = 1; j <= 2; j++) console.log(`${i} * ${j} = ${i * j}`);
}

const arr = ["a", "b", "c", "d", "e"];
for (let item of arr) {
  console.log(item);
}

const obj = { aa: 15, bb: 35, cc: 24, dd: 56 };
for (let item in obj) {
  console.log(item);
  console.log(obj[item]);
}
