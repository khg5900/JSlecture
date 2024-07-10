const arr1 = ["사과", "오렌지", "자두"];

// 접근
console.log(arr1[0]);
console.log(arr1[2]);

// 갱신& 추가
arr1[2] = "배";
console.log(arr1[2]);
arr1[3] = "레몬";
console.log(arr1[2]);

// 삭제
delete arr1[3];
console.log(arr1[3]);
arr1[3] = "레몬";
console.log(arr1[3]);

// 메서드
console.log(arr1.length);
console.log(arr1);
console.log(arr1.indexOf("배")); // 인덱스값
console.log(arr1.push("메론"));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);
