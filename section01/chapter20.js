// json.stringfy => json -> string

let object1 = { name:"zeus", age : 400 };
let object2 = { ...object1 };
let object3 = object1;

if (object1===object2){ console.log("얕은복사"); }
else { console.log("깊은복사"); }

console.log( JSON.stringify(object1) + "문자열" );

if (JSON.stringify(object1)===JSON.stringify(object2)){ console.log("같은내용"); }
else { console.log("다른내용"); }
