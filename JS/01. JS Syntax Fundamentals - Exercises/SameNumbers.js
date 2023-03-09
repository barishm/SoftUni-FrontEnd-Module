function solve(numbers) {
    let same = true;
    let curNum;
    let sum = 0;
    numbers = numbers.toString();
    let firstNum = numbers[0];

    for (let index = 0; index < numbers.length; index++) {
        curNum = numbers[index];
        if(curNum !== firstNum){
            same = false;
        }
        curNum = curNum * 1;
        sum += curNum;
    }
    console.log(same);
    console.log(sum);
}

solve(2222222);