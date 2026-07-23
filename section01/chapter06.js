// =============== 함수 호이스팅 ===============

// console.log(helloA); // 초기화 x
let helloA = function () { return "함수표현식 익명함수" }
console.log(helloA);

// =============== 함수 호이스팅 ===============

// console.log(helloB); // 초기화 x
let helloB = () => "함수표현식 화살표함수"
console.log(helloB);

// =============== 함수 호이스팅 ===============

console.log(helloC);
function helloC() { return "함수선언식" }
console.log(helloC);
