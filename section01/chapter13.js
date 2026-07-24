const person = {
    name : "홍길동",
    age : 25,
    tall : 179
}

console.log(person);
let keyArray = Object.keys(person);
let valueArray = Object.values(person);
console.log(keyArray);

keyArray.forEach((e)=>{console.log(e)});
keyArray.forEach((e)=>{console.log(person[e])});

keyArray.forEach((e)=>{console.log(`${e} : ${person[e]}`)});
valueArray.forEach((e)=>{console.log(`${e} : ${typeof e}`)});

// Object.values(person).forEach((e)=>{console.log(`${e} : ${typeof e}`)});

for (const e of keyArray) {
    console.log(`${e} : ${person[e]}`);
}

for (const e of valueArray) {
    console.log(`${e} : ${typeof e}`);
}
