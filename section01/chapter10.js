//상수 객체

const animal1 = {
    type: "고양이",
    name: "나비",
    color: "black",
    func1(){ console.log( `${this.type}`) },
    func2 : function(){ console.log( `${this.type}`) },
    func3 : () => { console.log( `${animal1.type}`) }
};

// const animal2 = {
//     type: "고양이",
//     name: "나비",
//     color: "black",
// };

// let animal3 = "고양이3"

// animal1.type = "고양이2"
// console.log(animal1);
// console.log(animal2);
// console.log(animal3);

animal1.age = 5;
animal1.name = "나비";
animal1.color = 123456;
// delete animal1["age"];
console.log(animal1);
console.log(typeof animal1.color );

animal1.func1();
animal1.func2();
animal1.func3();

animal1["func1"]();
animal1["func2"]();
animal1["func3"]();
