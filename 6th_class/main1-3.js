const divStyle = {
  width: 100,
  hight: 200,
  "baclground-color": "pink",
};

function divSizeDouble(obj) {
  // console.log(typeof obj[item]);
  for (let item in obj)
    if (typeof obj[item] === "number") {
      obj[item] *= 2;
    }
}

console.log(divStyle);
divSizeDouble(divStyle);
console.log(divStyle);
