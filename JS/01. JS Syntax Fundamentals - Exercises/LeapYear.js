function solve(num) {
    let result = "no";
    if(num % 4 == 0 && num % 100 !== 0 || num % 400 == 0){
        result = "yes";
    }
    console.log(result);
}
solve(1984);