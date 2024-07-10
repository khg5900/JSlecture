const obj = { name: "hg", nickname: "bing", numArr: [1, 3, 45, 68, 12] };

// 접근
const keyname = "nickname";
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[keyname]);
// . 문자만 , [] 문자 & 객체

// 갱신 & 생성
obj.name = "sj"; // 있는것 > 갱신
console.log(obj.name);
console.log(obj);
obj.country = "kr"; // 없는것 > 생성

console.log(obj.numArr[2] + obj.numArr[3]);
const arr = obj.numArr;
console.log(arr[2] + arr[3]);
console.log(obj);

// 삭제
delete obj.country;
console.log(obj);

// 메서드
console.log(Object.keys(obj));
console.log(Object.values(obj));
