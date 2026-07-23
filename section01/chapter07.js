// ==================== 콜백 함수 ====================
function checkMood(mood, goodCallback, badCallback) {
    if (mood === "good") { 
        //sing(); 
        //dance();
        goodCallback(); 
    }
    else { 
        //cry(); 
        badCallback();
    }
}

// function sing() { return console.log("노래부르기") }
// function cry() { return console.log("울기") }
// function dance() { return console.log("춤추기") }

let sing = () => { console.log("노래부르기") }
let cry = () => { console.log("울기") }
let dance = () => { console.log("춤추기") }

checkMood("good", () => console.log("노래부르기"), () => console.log("울기") );



// ================= 콜백 함수 응용 =================
function repeat(count, callback) {
    for (let index = 0; index < count; index++) {
        callback(index);
    }
}

repeat(10, (idx) => console.log("화이팅"+idx));
