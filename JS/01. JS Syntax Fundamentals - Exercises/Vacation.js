function solve(people, type, day) {
    let sum = 0;
    if(type == "Students"){
        if(day == "Friday"){
            sum = people * 8.45;
        }else if(day =="Saturday"){
            sum = people * 9.80;
        }else if(day ==="Sunday"){
            sum = people * 10.46;
        }
        if(people >= 30){
            sum = sum * 0.85;
        }
    }else if(type ==="Business"){
        if(day == "Friday"){
            sum = people * 10.90;
            if(people >= 100){
                sum -= 10 * 10.90;
            }
        }else if(day =="Saturday"){
            sum = people * 15.60;
            if(people >= 100){
                sum -= 10 * 15.60;
            }
        }else if(day ==="Sunday"){
            sum = people * 16;
            if(people >= 100){
                sum -= 10 * 16;
            }
        }
    }else if(type ==="Regular"){
        if(day == "Friday"){
            sum = people * 15;
        }else if(day =="Saturday"){
            sum = people * 20;
        }else if(day ==="Sunday"){
            sum = people * 22.50;
        }
        if(people >= 10 && people <= 20){
            sum = sum * 0.95;
        }
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(40,"Regular","Saturday");