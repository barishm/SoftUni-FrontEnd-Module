function solve (fruit,weight,price) {
    let money = 0;
    weight = weight * 0.001;
    money = weight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80);