//지역 전역 변수
let a = 1;

function funcA() { 
    let a = 2; 
    console.log(a); 

    function funcB(index) {
        console.log("지역함수" + index)
    }
    funcB(10);
}

funcA();
console.log(a);

if(true) { let c = 10; console.log(c); }

for (let index = 0; index < 5; index++) {
    let count = 1;
    count += count;
    console.log(count);
}
