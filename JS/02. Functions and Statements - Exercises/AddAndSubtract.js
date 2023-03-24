function solve (numOne,numTwo,numThree) {
    let result = subtract(sum(numOne,numTwo),numThree);
    console.log(result);
}
function sum (numOne,numTwo,numThree) {
    let sum = numOne + numTwo;
    return sum;
}
function subtract(sum,numThree){
    let result = sum - numThree;
    return result;
}

solve(23,
    6,
    10);