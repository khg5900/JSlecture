const arr = ["a", "b", "c", "d", "e"];

arr.forEach((item) => {
  console.log(item);
  return item + "aa";
});

console.log(arr);
