function solve (char1,char2) {
    let result = "";
    let index1 = char1.charCodeAt(0);
    let index2 = char2.charCodeAt(0);
    if(index1 > index2){
        for (let index = index2+1; index < index1; index++){
            result += " " + String.fromCharCode(index);
           
        }
    }else if(index2 > index1) {
        for (let index = index1+1; index < index2; index++){
            result += " " + String.fromCharCode(index);
           
        }
    }
    console.log(result);
}

solve('#',
':');