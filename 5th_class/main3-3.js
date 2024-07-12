let sum = 0;
const salaries = { Jhon: 100, Ann: 160, Pete: 130 };
for (let item in salaries) {
  sum += salaries[item];
}
console.log(sum);
