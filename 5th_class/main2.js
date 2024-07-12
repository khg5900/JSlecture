const drinkName = "땡모반";
const drinkPrice = 5900;

if (drinkPrice >= 5000) {
  console.log(`${drinkName}은 비쌉니다.`);
} else if (drinkPrice >= 4000) {
  console.log(`${drinkName}은 가격이 적절합니다.`);
} else {
  console.log(`${drinkName}은 쌉니다.`);
}

// 삼항연산자 안쓸때
// if (drinkPrice >= 5000) {
//   console.log(`${drinkName}은 비쌉니다.`);
// } else {
//   console.log(`${drinkName}은 쌉니다.`);
// }

// 삼항연산자 쓸때
let result = "";
result =
  drinkPrice >= 5000 ? `${drinkName}은 비쌉니다.` : `${drinkName}은 쌉니다.`; // 짧을 경우 if else.
console.log(result);
