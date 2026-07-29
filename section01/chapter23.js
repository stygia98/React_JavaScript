

// orderFood("백숙", (food) => {
//     console.log(`${food} 음식을 완료`)
//     coolFood("백숙", (food)=>{{
//         console.log(`${food} 차갑게 완료`)
//         freezeFood("백숙", (food)=>{
//             console.log(`${food} 냉동 완료`)
//         });
//     }});
// });

function orderFood(food, flag){
    const promise = new Promise((resolve, reject)=>{
        console.log(`${food} 음식 주문`);
        setTimeout(() => {
            // let flag = true;
            (flag === true)
            ? resolve((`${food} : 주문 성공`))
            : reject((`${food} : 주문 실패`))
        }, 3000);
    })
    return promise;
}

function coolFood(food, flag){
    const promise = new Promise((resolve, reject)=>{
        console.log(`${food} 차갑게 음식 주문`);
        setTimeout(() => {
            // let flag = true;
            (flag === true)
            ? resolve((`${food} : 차갑게 주문 성공`))
            : reject((`${food} : 차갑게 주문 실패`))
        }, 3000);
    })
    return promise;
}

function freezeFood(food, flag){
    const promise = new Promise((resolve, reject)=>{
        console.log(`${food} 냉동 주문`);
        setTimeout(() => {
            // let flag = true;
            (flag === true)
            ? resolve((`${food} : 냉동 주문 성공`))
            : reject((`${food} : 냉동 주문 실패`))
        }, 3000);
    })
    return promise;
}

// const promise = orderFood("백숙", true)

orderFood("백숙", true)
    .then((result)=>{
        console.log(result);
        return coolFood("백숙", false);
    })
    .then((result)=>{
        console.log(result);
        return freezeFood("백숙", true);
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

const arr = [10, 20, 30, 40, 50]

arr.forEach((e)=>{
    console.log(`사용자 화면 ${e}`)
})