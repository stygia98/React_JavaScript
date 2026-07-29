//const moduleData = require("./math");
// console.log(moduleData);

// let value1 = moduleData.add(10, 20);
// let value2 = moduleData.sub(30, 10);

// console.log(value1);
// console.log(value2);




// import mul from './math.js' // default function
// import {add, sub} from './math.js'
import mul, {add, sub} from './math.js'

let value1 = add(10, 20);
let value2 = sub(30, 10);
let value3 = mul(30, 10);


console.log(value1);
console.log(value2);
console.log(value3);


// https://www.npmjs.com/

// $ npm install randomColor // 명령어

// package.json // 자동추가
//   "dependencies": {
//     "randomcolor": "^0.6.2"
//   }

import randomColor from 'randomColor';
const colorValue = randomColor();
console.log(`randomColor = ${colorValue}`)


let value01 = add(10, 20);
let value02 = add(10, 20);
let value03 = add(10, 20);
let value04 = add(10, 20);
