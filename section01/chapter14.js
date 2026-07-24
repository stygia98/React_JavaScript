// 배열의 내장함수 forEach

const arr = [1, 2, 3, 4];
console.log("==============================")
for (const e of arr){ console.log(e); }
console.log("==============================")
arr.forEach((e)=>{console.log(e)});



const newArr1 = [];
arr.forEach((e)=>{newArr1.push(e*2)});
console.log("==============================")
newArr1.forEach((e)=>{console.log(e)});


// ================ map ================ 
let newArr2 = arr.map((e)=> e*2 );
console.log(newArr2);

let newArr3 = arr.map((e)=> (e%2===0)?(e*2):(e*3) );
console.log(newArr3);

// ============= includes ============= 
let number = 6;
let flag = false;
arr.forEach((e)=>{
    if(e === number) flag=true;
})
console.log(flag);
console.log(arr.includes(number));

// ============== indexOf ==============
let index1 = -1;
let count1 = 0;
arr.forEach((e)=>{
    if(e===number) index1 = count;
    count1++;
})
console.log(index1);
console.log(arr.indexOf(number));

// ============== findIndex ==============
let index2 = arr.findIndex((e)=> (e===number));
console.log(index2);

const arr3 = [
    {color : "red"},
    {color : "blue"},
    {color : "green"},
    {color : "yellow"},
]

let index3 = -1;
let count3 = 0;
arr3.forEach((e)=>{
    if(e.color==="red") index3 = count3;
    count3++;
})

console.log(index3);
console.log(arr3[index3]);
let index4 = arr3.findIndex((e)=>{ return e.color==="yellow"})
console.log(arr3[index4])


// ============== findObject ==============
let findObject = null;
arr3.forEach((e)=>{
    if(e.color==="yellow") findObject = e;
})
console.log("================")
console.log(findObject || "찾는객체가 없습니다");

const findObject2 = arr3.find((e)=>{return e.color==="yellow"})
console.log(findObject2 || "찾는객체가 없습니다");

// ============== filter ==============
let arr4 = [
    { name: "구길동", hobby: "테니스" },
    { name: "저길동", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const filterArr = [];
arr4.forEach((e)=>{
    if (e.hobby==="테니스") { filterArr.push(e); }
})
console.log(filterArr.length===0);
console.log(filterArr);
console.log(arr4.filter((e)=>{return e.hobby==="테니스"}));

// ============== Map 새로운배열 생성반환 ==============
arr4.forEach((item, index, array)=>{
    console.log(item);
    console.log(index);
    console.log(arr);
    console.log();
})

const nameArray = []
arr4.forEach((e,index, array)=>{
    nameArray.push(e.hobby);
    // nameArray.push({...e, no:`${index}`});
})
console.log(nameArray);
console.log(arr4.map((e)=>e.hobby));
// console.log(arr4.map((e)=>{
//     let newObject = {};
//     newObject.hobby = e.hobby;
//     return newObject;
// }));
console.log(arr4.map((e)=>{ return {hobby : e.hobby}} ));

// ============== slice ==============
const sliceArray = arr4.slice(0, 3);
console.log(sliceArray);

// ============== concat ==============
let arr5 = [
    { name: "구길동", hobby: "테니스" },
    { name: "저길동", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];
let arr6 = [
    { name: "구길동", hobby: "테니스" },
    { name: "저길동", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const concatArr = arr5.concat(arr6);
console.log(concatArr);

// ============== sort ==============
let arr7 = ["나", "가", "라"];
arr7.sort();
const sortedArr = arr7.toSorted().reverse();
console.log(arr7);
console.log(sortedArr);

let arr8 = [0, 1, 3, 2, 10, 30, 20];
arr8.sort();
console.log(arr8);

// arr8.sort((a, b)=>{
//     if(a > b) return 1;
//     else if(a < b) return -1;
//     else return 0;
// })
arr8.sort((a, b) => a - b);
console.log(arr8);

// ============== join ==============
const arr9 = ["안녕", "하", "세", "요"];
const joined = arr9.join("/");
console.log(joined);

