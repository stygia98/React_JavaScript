//비동기로 처리한 방식(Web APIs 에서 실행된다)
function task(a, b, callback) {
    setTimeout(() => {
        //console.log(a+b);
        let sum = a + b;
        callback(sum);
    }, 1000);
}

// task(10, 20, (sum) => console.log(sum));
// console.log(1);
// console.log(3);



// 비동기
// 1단계 음식주문
function orderFood(food, callback){
    console.log(`서버에 음식 요청 : ${food}`)
    setTimeout(() => { callback(food) }, 2000);
}

// orderFood("백숙", (food) => console.log(`${food} 음식을 완료`));

// 2단계 
function coolFood(food, callback){
    console.log(`서버에 음식을 차갑게 요청 : ${food}`);
    setTimeout(() => { callback(food); }, 2000);
}

// coolFood("백숙", (food)=>console.log(`${food} 차갑게 완료`));

// 3단계
function freezeFood(food, callback){
    console.log(`서버에 음식을 냉동 요청 : ${food}`);
    setTimeout(() => { callback(food); }, 2000);
}

// freezeFood("백숙", (food)=>console.log(`${food} 냉동 완료`))



orderFood("백숙", (food) => {
    console.log(`${food} 음식을 완료`)
    coolFood("백숙", (food)=>{{
        console.log(`${food} 차갑게 완료`)
        freezeFood("백숙", (food)=>{
            console.log(`${food} 냉동 완료`)
        });
    }});
});
