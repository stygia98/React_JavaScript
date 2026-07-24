// 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 객체 프로퍼티
let person = {
    name : "홍길동",
    age : 30,
    gender : false,
    extra : {
        ext1 : 10,
        ext2 : "str",
        ext3 : false
    },
    extra2 : function () { console.log(this.name) },
    extra3 : [1, 2, 3, 4, 5],
    "like cat" : true,
}

// console.log(person);
console.log(person.age);
console.log(person["age"]);

console.log(person.extra.ext1);
console.log(person.extra["ext1"]);

console.log(person["like cat"]);

console.log(person.extra3[0]);
console.log(person.extra3[1]);

person.extra2();
// person.extra4();

person.name = "홍길동";
person["name"] = "홍길동2"

console.log(person);

delete person.age;
// delete psrson["age"];
console.log(person);

let result1 = "name" in person;
console.log(result1);

person.address = "경기도 성남시";
console.log(person);