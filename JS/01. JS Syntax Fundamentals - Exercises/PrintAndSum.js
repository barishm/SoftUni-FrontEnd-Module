function solve(num1,num2) {
    let sum = 0;
    let output = '';
    for (let index = num1; index <= num2; index++){
        output += index + ' ';
        sum += index;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
solve(0,26);