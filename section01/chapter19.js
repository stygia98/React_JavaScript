// 1. Spread 연산자
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
let arr3 = arr1;
let arr4 = [...arr1];
console.log(arr1);
console.log(arr3);
console.log(arr2);

if (arr1===arr3){ console.log("얕은복사") };
(arr1===arr4) ?  console.log("얕은복사") : console.log("깊은복사");

// // 2. Spread 연산자(객체)
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    a: obj1.a,
    b: obj1.b,
    c: 3,
    d: 4,
};

let obj3 = {
    ...obj2,
    c: 5,
    d: 6,
};

console.log(obj3); 


// // 3. Spread 연산자(함수매개변수)
function funcA(p1, p2, p3, p4 = 10) {
    console.log(p1, p2, p3, p4);
}

let arr5 = [1, 2, 3];
funcA(...arr5);

// // 4. rest 매개변수
// // rest는 나머지 , 나머지 매개변수

function funcB(one, ...rest) {
    console.log(one); //1 출력
    console.log(rest); //[2, 3] 출력
    console.log(...rest); //2, 3 출력
}

arr6 = [1, 2, 3];
funcB(...arr6);

// //주의: rest매개변수 뒤에는 추가로 다른 변수가 올수 없다.
// function funcB(one, ...ds, as) { //as 추가로 올 수 없다
//     console.log(ds); 
// }
