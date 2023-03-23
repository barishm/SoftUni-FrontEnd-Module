function solve (numOne,numTwo,numThree) {
    let result = numOne * numTwo * numThree;
    if(result < 0){
        console.log("Negative");
    }else {
        console.log("Positive");
    }
}

solve(-5,
    1,
    1);