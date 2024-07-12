const drinkPriceObj = {
  a: 3500,
  b: 3500,
  c: 4500,
  d: 4500,
  e: 4900,
  f: 4900,
  g: 4900,
  h: 4900,
  i: 4900,
  j: 5900,
};

for (let drinkName in drinkPriceObj) {
  if (drinkPriceObj[drinkName] <= 5000) {
    drinkPriceObj[drinkName] += 500;
  }
}
console.log(`${drinkPriceObj[drinkName]}원`);
