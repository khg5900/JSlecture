let i = 0;
while (i <= 5) {
  console.log(`i가 5까지 고 현재 ${i}`);
  i++;
}
let j = 0;
while (true) {
  console.log(`j가 5까지 고 현재 ${j}`);
  j++;
  if (j === 6) {
    break;
  }
}

const arr = [2, 5, 7, 15, 17, 19, 20, 25, 30];
for (let age of arr) {
  if (age < 17) {
    console.log(`${age}은 주민등록증 발급이 불가능합니다.`);
  } else {
    break;
  }
}
// const arr = [2, 5, 7, 15, 17, 19, 20, 25, 30];
for (let age of arr) {
  console.log(`${age}살 입니다.`);
  if (age !== 17) {
    continue;
  }
  console.log("와우 17살이군요 주민등록증을 발급받아보세요!");
}
