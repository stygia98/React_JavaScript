//단락평가
function returnFalse() {
    console.log("false 함수");
    return false;
}

function returnTrue() {
    console.log("true 함수");
    return true;
}

// console.log(false && true);
// console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());
console.log(returnFalse() || returnTrue());
// console.log(returnTrue() || returnFalse());

// 자바스크립트에서 false를 반환
// 기본타입 : 디폴트값 false
// 0, 0.0, "", false, undefined, null, Nan;

function printName(person){
    // let name = person && person.name
    let name = person && "존재함"
    console.log(name || "객체가 존재하지 않음");
}

printName();
printName({name:"홍길동"});

console.log("==============================================");

let arr = [0, 0.0, "", false, undefined, null, NaN, [], {}, ()=>{}, function(){}, function aa(){}];

for (let index in arr) {
    console.log(arr[index]);
    printName(arr[index]);
}
