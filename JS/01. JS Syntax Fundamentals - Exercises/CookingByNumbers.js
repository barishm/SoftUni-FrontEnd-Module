function solve(number,opr1,opr2,opr3,opr4,opr5){
    number = number * 1;
    oprArray = [opr1,opr2,opr3,opr4,opr5];
    for (let index = 0; index < 5; index++) {
        if(oprArray[index] === "dice"){
            number = Math.sqrt(number);
        }else if(oprArray[index] === "chop"){
            number = number / 2;
        }else if(oprArray[index] === "spice"){
            number++;
        }else if(oprArray[index] === "bake"){
            number = number * 3;
        }else if(oprArray[index] === "fillet"){
            number = 0.8 * number;
        }
        console.log(Math.round(number*10)/10);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');