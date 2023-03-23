function solve (product,quantity) {
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;
    let result;

    if(product === "coffee"){
        result = coffee * quantity;
        console.log(result.toFixed(2));
    } else if(product === "water") {
        result = water * quantity;
        console.log(result.toFixed(2));
    }else if(product === "coke") {
        result = coke * quantity;
        console.log(result.toFixed(2));
    }
    else if(product === "snacks") {
        result = snacks * quantity;
        console.log(result.toFixed(2));
    }

}
solve ("water", 5);