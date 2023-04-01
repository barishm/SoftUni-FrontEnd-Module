function solve(number) {
    let oddSum = 0;
    let evnSum = 0;
    let curNum;
    let iter = number.toString().length;
    for (let index = 0; index < iter; index++) {
        curNum = number % 10;
        if(curNum % 2 === 0){
            evnSum += curNum;
        }else{
            oddSum += curNum;
        }
        number = Math.floor(number / 10);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evnSum}`);
}

solve(3495892137259234);