function solve (numOne,numTwo,operator) {
    let result;
    switch(operator) {
        case "multiply":
            result = numOne * numTwo;
        break;

        case "divide":
            result = numOne / numTwo;
        break;

        case "add":
            result = numOne + numTwo;
        break;

        case "subtract":
            result = numOne - numTwo;
        break;  
    }
}

solve(5,
    5,
    'multiply');