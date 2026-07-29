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

async function getData(flag) {
    if(flag === true){
        return {
            name: "zeus",
            age: 30,
        };
    } else {
        return new Error("객체가 없습니다");
    }
}

// console.log(getData());

// getData()
// .then((result)=>{
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// })

console.log("클라이언트 화면입니다");

async function printData() {
    const result = await getData(true);
    console.log(result);
}

printData();