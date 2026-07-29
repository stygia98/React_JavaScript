// 비동기 promise

function task(a, b, callback){
    setTimeout(() => {
        let sum = a + b;
        callback(sum);
    }, 1000);
};

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("hello");
//         resolve("안녕");
//         reject("실패");
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise);
// }, 3000);

// 비동기 resolve reject
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        const num = "10";
//        (typeof num === 'number') ? resolve(num+10) : reject(`${num} : 숫자가 아님`);
//     }, 2000);
// })

// setTimeout(() => {
//     console.log(promise2);
// }, 3000);

// promise2
//     .then((value)=>{
//         console.log(`promise2.then = ${value}`);
//     })
//     .catch((value)=>{
//         console.log(`promise2.catch = ${value}`);
//     })

// 비동기 처리방식
function add10(num){
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // const num = 10;
            (typeof num === 'number') && (num<20) ? resolve(num+10) : reject(`${num} : 숫자가 아님`);
        }, 2000);
    });
    return promise3;
}

// const promise4 = add10(0);
// promise4.then((result)=>{ 
//     console.log(result);
//     const promise5 = add10(result);
//     promise5.then((result)=>{
//         console.log(result);
//     })
// })

add10(0)
.then((result)=>{
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(error);
})

console.log(100);
