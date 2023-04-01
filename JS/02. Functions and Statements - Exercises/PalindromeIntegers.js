function solve (arr) {
    let string = "";
    let reversedString = "";
    for (let index = 0; index < arr.length; index++) {
        string = arr[index].toString();
        reversedString = string.split("").reverse().join("");
        if(string === reversedString){
            console.log("true");
        }else{
            console.log("false");
        }
        
    }
}

solve([123,323,421,121]);