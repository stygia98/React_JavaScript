// Date 객체
let date1 = new Date();
console.log(date1);

// Date 날자 지정
let date2 = new Date(2024,6,24, 16, 1,1);
console.log(date2);

// Date 포멧
let date3 = new Date();
const timeStamp = date3.getTime();
console.log(timeStamp); // 1970,1,1,0,0,0 => 0 / 1970,1,1,0,0,1 => 1000
