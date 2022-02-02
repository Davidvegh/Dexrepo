function randomArray(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 10 + 1));
    }
    return arr
}

console.log(randomArray(4));




function createArray(item, size1, size2) {
    let myArray1 = [];
    let myArray2 = [];
    if (item, size1, size2) {
        for (let i = 0; i < size2; i++) {
            myArray2.push(item);
        }
        for (let j = 0; j < size1; j++) {
            myArray1.push(myArray2)
        }
        return myArray1;
    }
    else if(item, size1) {
        for (let i = 0; i < size1; i++) {
            myArray1.push(item);
        }
        return myArray1;
    }
    else if(item){
        console.log("Nem adtál meg tömbméretet!");
        return null;
    }
}

console.log(createArray("vmi", 3, 3));




function choseArray(array, index) {
    let thisArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < index.length; j++) {
            if (i === index[j]) {
                thisArray.push(array[i]);
            }
        }
    }
    return thisArray;
}

console.log(choseArray(["kutya", "cica", "ló", "farkas"], [1, 3]));




function callBack(function1, function2, str){
    if(typeof function1 !== "function" || typeof function2 !== "function"){
        console.log("Nem megfelelő függvény paraméterek");
    }
    else if(typeof str === "string"){
        function1(str);
    }
    else if(function1, function2 || str === undefined){
        function2();
    }
}

function firstCallback(str){
    console.log("A megadott string: " + str);
}

let secondCallback= function(){
    console.log("Nincs, vagy hibás 3. paraméter.");
}

console.log(callBack(firstCallback, secondCallback, "random"));